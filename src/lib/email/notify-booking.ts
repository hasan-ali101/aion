import { getResendClient } from "./client";
import { CLINIC_TIME_ZONE } from "@/lib/cliniko/timezone";

interface BookingNotificationInput {
  patientName: string;
  serviceName: string;
  startsAt: string;
}

const NOTIFY_TO = "support@aion-clinic.com";
const NOTIFY_FROM = "Aion Clinic <no-reply@aion-clinic.com>";

export async function sendBookingNotification(input: BookingNotificationInput) {
  const resend = getResendClient();

  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: CLINIC_TIME_ZONE,
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(input.startsAt));

  await resend.emails.send({
    from: NOTIFY_FROM,
    to: NOTIFY_TO,
    subject: `New booking: ${input.patientName} — ${input.serviceName}`,
    text: `${input.patientName} booked ${input.serviceName} for ${formattedTime}.`,
  });
}
