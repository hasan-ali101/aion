import type { NextApiRequest, NextApiResponse } from "next";

import { ClinikoApiError, clinikoRequest } from "@/lib/cliniko/client";
import type { ClinikoIndividualAppointment, ClinikoPatient } from "@/lib/cliniko/types";
import { getBookingServiceById } from "@/lib/data/booking-services";
import { sendBookingNotification } from "@/lib/email/notify-booking";

interface CreateAppointmentBody {
  serviceId: string;
  patientId: string;
  startsAt: string;
  locationType: "remote" | "in-person";
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { serviceId, patientId, startsAt, locationType } = req.body as Partial<CreateAppointmentBody>;

  const service = getBookingServiceById(serviceId ?? "");
  if (!service) {
    return res.status(400).json({ error: "Unknown service" });
  }
  if (!patientId || !startsAt || !locationType) {
    return res.status(400).json({ error: "Missing patient, appointment time, or location" });
  }

  try {
    const appointment = await clinikoRequest<ClinikoIndividualAppointment>("/individual_appointments", {
      method: "POST",
      body: {
        appointment_type_id: service.appointmentTypeId,
        business_id: service.businessId,
        practitioner_id: service.practitionerId,
        patient_id: patientId,
        starts_at: startsAt,
        notes: `Location: ${locationType === "remote" ? "Remote" : "In person"}`,
        // Undocumented, but confirmed by testing: this is what tells Cliniko the appointment came
        // through online booking, which is what triggers their native confirmation email. It does
        // NOT unlock invoice/online-payment generation — that still requires their own widget UI.
        online_booking_policy_accepted: true,
      },
    });

    try {
      const patient = await clinikoRequest<ClinikoPatient>(`/patients/${patientId}`);
      const firstName = patient.preferred_first_name?.trim() || patient.first_name;
      await sendBookingNotification({
        patientName: `${firstName} ${patient.last_name}`,
        serviceName: service.name,
        startsAt,
      });
    } catch (notifyError) {
      // The appointment is already booked in Cliniko at this point — a notification
      // failure must never make the booking itself appear to have failed.
      console.error("booking notification email failed", notifyError);
    }

    return res.status(201).json({ appointmentId: appointment.id });
  } catch (error) {
    if (error instanceof ClinikoApiError && error.code === "VALIDATION") {
      // The only patient-editable input at this stage is the chosen slot, so a validation
      // rejection here almost always means someone else booked it first.
      return res.status(409).json({
        errorCode: "SLOT_UNAVAILABLE",
        error: "That time was just booked by someone else. Please choose another time.",
      });
    }
    console.error("appointment create error", error);
    return res.status(502).json({
      error: "We couldn't create your appointment right now. Please try again shortly.",
    });
  }
}
