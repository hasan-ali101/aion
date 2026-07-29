import type { GetServerSideProps } from "next";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";

import HeadWrapper from "@/components/headwrapper";
import { Button } from "@/components/button";
import { getStripeClient } from "@/lib/stripe/client";
import { clinikoRequest } from "@/lib/cliniko/client";
import type { ClinikoIndividualAppointment, ClinikoPatient } from "@/lib/cliniko/types";
import { sendBookingConfirmationEmail } from "@/lib/email/notify-patient-confirmation";
import { getBookingServiceById } from "@/lib/data/booking-services";

interface SuccessPageProps {
  paid: boolean;
}

// Marks an appointment's notes so a page refresh never sends the confirmation email twice.
const CONFIRMATION_SENT_MARKER = "[Booking confirmation email sent]";

export const getServerSideProps: GetServerSideProps<SuccessPageProps> = async (context) => {
  const sessionId = context.query.session_id;

  if (typeof sessionId !== "string" || !sessionId) {
    return { props: { paid: false } };
  }

  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid";

    if (paid) {
      const { clinikoPatientId, clinikoAppointmentId, serviceId, locationType } = session.metadata ?? {};
      if (clinikoPatientId && clinikoAppointmentId && serviceId && locationType) {
        try {
          await confirmBooking(
            clinikoPatientId,
            clinikoAppointmentId,
            serviceId,
            locationType === "in-person" ? "in-person" : "remote",
          );
        } catch (error) {
          // Payment already succeeded — a confirmation-email hiccup must never fail the page.
          console.error("booking confirmation email failed", error);
        }
      }
    }

    return { props: { paid } };
  } catch (error) {
    console.error("checkout session verification error", error);
    return { props: { paid: false } };
  }
};

async function confirmBooking(
  patientId: string,
  appointmentId: string,
  serviceId: string,
  locationType: "remote" | "in-person",
) {
  const appointment = await clinikoRequest<ClinikoIndividualAppointment>(
    `/individual_appointments/${appointmentId}`,
  );

  if (appointment.notes?.includes(CONFIRMATION_SENT_MARKER)) {
    return;
  }

  const service = getBookingServiceById(serviceId);
  if (!service) return;

  const patient = await clinikoRequest<ClinikoPatient>(`/patients/${patientId}`);
  if (!patient.email) return;

  const firstName = patient.preferred_first_name?.trim() || patient.first_name;

  await sendBookingConfirmationEmail({
    patientName: `${firstName} ${patient.last_name}`,
    patientEmail: patient.email,
    serviceName: service.name,
    practitionerName: service.practitionerName,
    startsAt: appointment.starts_at,
    locationType,
    telehealthUrl: appointment.telehealth_url,
  });

  const updatedNotes = appointment.notes
    ? `${appointment.notes}\n${CONFIRMATION_SENT_MARKER}`
    : CONFIRMATION_SENT_MARKER;

  await clinikoRequest(`/individual_appointments/${appointmentId}`, {
    method: "PATCH",
    body: { notes: updatedNotes },
  });
}

export default function BookingSuccessPage({ paid }: SuccessPageProps) {
  return (
    <HeadWrapper title="Booking Confirmed | Aion Clinic" noIndex>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        {paid ? (
          <>
            <CheckCircle className="mb-6 h-16 w-16 text-primary" />
            <h1 className="mb-3 font-heading text-2xl font-semibold text-primaryDark">
              Your appointment is confirmed
            </h1>
            <p className="mb-8 max-w-md text-black/70">
              Thank you for your payment. We&apos;ve booked your Initial Medical Assessment and
              you&apos;ll receive a confirmation email shortly.
            </p>
          </>
        ) : (
          <>
            <XCircle className="mb-6 h-16 w-16 text-red-500" />
            <h1 className="mb-3 font-heading text-2xl font-semibold text-primaryDark">
              We couldn&apos;t confirm your payment
            </h1>
            <p className="mb-8 max-w-md text-black/70">
              If you completed payment, please contact the clinic to confirm your booking.
              Otherwise, you can try booking again.
            </p>
          </>
        )}
        <Link href="/">
          <Button>Back to home</Button>
        </Link>
      </div>
    </HeadWrapper>
  );
}
