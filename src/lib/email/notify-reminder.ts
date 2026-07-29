import { getResendClient } from "./client";
import { CLINIC_TIME_ZONE } from "@/lib/cliniko/timezone";
import { CLINIC_ADDRESS, CLINIC_ADDRESS_MAPS_URL } from "@/lib/data/booking-services";

interface ReminderInput {
  patientName: string;
  patientEmail: string;
  serviceName: string;
  practitionerName: string;
  startsAt: string;
  locationType: "remote" | "in-person";
  telehealthUrl: string | null;
}

const SUPPORT_EMAIL = "support@aion-clinic.com";
const NOTIFY_FROM = "Aion Clinic <no-reply@aion-clinic.com>";
const SITE_URL = "https://www.aion-clinic.com";

function renderHtml(input: ReminderInput, formattedTime: string): string {
  const locationBlock =
    input.locationType === "remote" && input.telehealthUrl
      ? `<p style="margin: 24px 0;">
           <a href="${input.telehealthUrl}" style="display:inline-block; background:#1F3D2D; color:#ffffff; padding:12px 24px; border-radius:24px; text-decoration:none; font-weight:bold; font-size:14px;">
             Join video call
           </a>
         </p>`
      : `<p style="margin:16px 0;">
           This appointment is <strong>in person</strong> at:<br />
           <a href="${CLINIC_ADDRESS_MAPS_URL}" style="color:#1F3D2D;">${CLINIC_ADDRESS}</a>
         </p>`;

  return `
<div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color:#1a1a1a; background:#ffffff;">
  <div style="text-align:center; padding: 32px 0 16px;">
    <img src="${SITE_URL}/images/logo_primary.png" alt="Aion Clinic" width="150" style="display:inline-block;" />
  </div>
  <div style="padding: 0 32px 24px; font-size:15px; line-height:1.6;">
    <p>Dear ${input.patientName},</p>
    <p>This is a reminder that your <strong>${input.serviceName}</strong> with <strong>${input.practitionerName}</strong> is coming up:</p>
    <p style="font-size:18px; font-weight:bold; color:#1F3D2D; margin: 16px 0 0;">
      ${formattedTime} (${input.locationType === "remote" ? "remote" : "in person"})
    </p>
    ${locationBlock}
    <p>If you have any questions, please email <a href="mailto:${SUPPORT_EMAIL}" style="color:#1F3D2D;">${SUPPORT_EMAIL}</a> — we're always happy to help.</p>
    <p style="margin-top:24px;">Kind regards,<br />Aion Clinic</p>
  </div>
  <div style="border-top:1px solid #eee; padding: 16px 32px; font-size:12px; color:#666;">
    <a href="${SITE_URL}" style="color:#1F3D2D; text-decoration:none;">www.aion-clinic.com</a>
    &nbsp;·&nbsp;
    <a href="mailto:${SUPPORT_EMAIL}" style="color:#1F3D2D; text-decoration:none;">${SUPPORT_EMAIL}</a>
  </div>
</div>`;
}

export async function sendAppointmentReminderEmail(input: ReminderInput) {
  const resend = getResendClient();

  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: CLINIC_TIME_ZONE,
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(input.startsAt));

  const locationLabel = input.locationType === "remote" ? "remote" : "in person";
  const textLines = [
    `Dear ${input.patientName},`,
    "",
    `This is a reminder that your ${input.serviceName} with ${input.practitionerName} is coming up on ${formattedTime} (${locationLabel}).`,
    "",
  ];

  if (input.locationType === "remote" && input.telehealthUrl) {
    textLines.push(`Video call link: ${input.telehealthUrl}`, "");
  } else {
    textLines.push(`This appointment is in person at: ${CLINIC_ADDRESS}`, `Map: ${CLINIC_ADDRESS_MAPS_URL}`, "");
  }

  textLines.push(
    `If you have any questions, please email ${SUPPORT_EMAIL} — we're always happy to help.`,
    "",
    "Kind regards,",
    "Aion Clinic",
  );

  await resend.emails.send({
    from: NOTIFY_FROM,
    to: input.patientEmail,
    replyTo: SUPPORT_EMAIL,
    subject: `Reminder: Your ${input.serviceName} is coming up`,
    text: textLines.join("\n"),
    html: renderHtml(input, formattedTime),
  });
}
