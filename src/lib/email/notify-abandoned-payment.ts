import { getResendClient } from "./client";
import { CLINIC_TIME_ZONE } from "@/lib/cliniko/timezone";

interface AbandonedPaymentInput {
  patientName: string;
  startsAt: string;
}

const NOTIFY_TO = "support@aion-clinic.com";
const NOTIFY_FROM = "Aion Clinic <no-reply@aion-clinic.com>";

export async function sendAbandonedPaymentAlert(input: AbandonedPaymentInput) {
  const resend = getResendClient();

  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: CLINIC_TIME_ZONE,
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(input.startsAt));

  await resend.emails.send({
    from: NOTIFY_FROM,
    to: NOTIFY_TO,
    subject: `Payment not completed: ${input.patientName}`,
    text: `${input.patientName}'s appointment on ${formattedTime} was booked but payment was never completed. The Cliniko slot is still held — please follow up or cancel manually.`,
  });
}
