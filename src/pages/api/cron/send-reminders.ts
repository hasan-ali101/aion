import type { NextApiRequest, NextApiResponse } from "next";

import { clinikoRequest, filter, idFromLink } from "@/lib/cliniko/client";
import type { ClinikoIndividualAppointment, ClinikoPatient } from "@/lib/cliniko/types";
import { londonDateKey } from "@/lib/cliniko/timezone";
import { bookingServices } from "@/lib/data/booking-services";
import { sendAppointmentReminderEmail } from "@/lib/email/notify-reminder";

const REMINDER_DAYS_BEFORE = 3;
const REMINDER_SENT_MARKER = "[Reminder email sent]";

function addDaysToDateKey(dateKey: string, days: number): string {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function parseLocationType(notes: string | null): "remote" | "in-person" {
  return notes?.includes("Location: In person") ? "in-person" : "remote";
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const todayKey = londonDateKey(new Date().toISOString());
  const targetDateKey = addDaysToDateKey(todayKey, REMINDER_DAYS_BEFORE);
  // Widen the UTC query range beyond the target London calendar day to safely cover BST/GMT,
  // then filter precisely by London date below.
  const rangeStart = `${addDaysToDateKey(targetDateKey, -1)}T22:00:00Z`;
  const rangeEnd = `${addDaysToDateKey(targetDateKey, 1)}T02:00:00Z`;

  let sent = 0;
  let failed = 0;

  for (const service of bookingServices) {
    try {
      const data = await clinikoRequest<{ individual_appointments: ClinikoIndividualAppointment[] }>(
        "/individual_appointments",
        {
          query: {
            "q[]": [
              filter("appointment_type_id", "=", service.appointmentTypeId),
              filter("starts_at", ">=", rangeStart),
              filter("starts_at", "<=", rangeEnd),
            ],
          },
        },
      );

      const dueAppointments = data.individual_appointments.filter(
        (appointment) =>
          !appointment.cancelled_at &&
          !appointment.notes?.includes(REMINDER_SENT_MARKER) &&
          londonDateKey(appointment.starts_at) === targetDateKey,
      );

      for (const appointment of dueAppointments) {
        try {
          const patientId = idFromLink(appointment.patient.links.self);
          const patient = await clinikoRequest<ClinikoPatient>(`/patients/${patientId}`);
          if (!patient.email) continue;

          const firstName = patient.preferred_first_name?.trim() || patient.first_name;

          await sendAppointmentReminderEmail({
            patientName: `${firstName} ${patient.last_name}`,
            patientEmail: patient.email,
            serviceName: service.name,
            practitionerName: service.practitionerName,
            startsAt: appointment.starts_at,
            locationType: parseLocationType(appointment.notes),
            telehealthUrl: appointment.telehealth_url,
          });

          const updatedNotes = appointment.notes
            ? `${appointment.notes}\n${REMINDER_SENT_MARKER}`
            : REMINDER_SENT_MARKER;

          await clinikoRequest(`/individual_appointments/${appointment.id}`, {
            method: "PATCH",
            body: { notes: updatedNotes },
          });

          sent += 1;
        } catch (error) {
          failed += 1;
          console.error("reminder send failed for appointment", appointment.id, error);
        }
      }
    } catch (error) {
      console.error("reminder lookup failed for service", service.id, error);
    }
  }

  return res.status(200).json({ sent, failed });
}
