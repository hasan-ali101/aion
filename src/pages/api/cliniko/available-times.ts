import type { NextApiRequest, NextApiResponse } from "next";

import { ClinikoApiError, clinikoRequest } from "@/lib/cliniko/client";
import type { ClinikoAvailableTimesResponse } from "@/lib/cliniko/types";
import { londonDateKey } from "@/lib/cliniko/timezone";
import { getBookingServiceById } from "@/lib/data/booking-services";

// Cliniko rejects available_times requests spanning more than 6 days.
const MAX_RANGE_DAYS = 6;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function addDays(dateStr: string, days: number): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function dateRangeInclusive(from: string, to: string): string[] {
  const dates: string[] = [];
  for (let d = from; d <= to; d = addDays(d, 1)) {
    dates.push(d);
  }
  return dates;
}

export interface AvailableTimesDay {
  date: string;
  slots: string[];
}

type ResponseBody = { days: AvailableTimesDay[] } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { serviceId, from } = req.query;

  const service = getBookingServiceById(typeof serviceId === "string" ? serviceId : "");
  if (!service) {
    return res.status(400).json({ error: "Unknown service" });
  }

  if (typeof from !== "string" || !DATE_PATTERN.test(from)) {
    return res
      .status(400)
      .json({ error: "A valid 'from' date (YYYY-MM-DD) is required" });
  }

  const to = addDays(from, MAX_RANGE_DAYS);

  try {
    const data = await clinikoRequest<ClinikoAvailableTimesResponse>(
      `/businesses/${service.businessId}/practitioners/${service.practitionerId}/appointment_types/${service.appointmentTypeId}/available_times`,
      { query: { from, to } },
    );

    const byDate = new Map<string, string[]>();
    for (const slot of data.available_times) {
      const dateKey = londonDateKey(slot.appointment_start);
      const existing = byDate.get(dateKey) ?? [];
      existing.push(slot.appointment_start);
      byDate.set(dateKey, existing);
    }

    const days = dateRangeInclusive(from, to).map((date) => ({
      date,
      slots: (byDate.get(date) ?? []).sort(),
    }));

    return res.status(200).json({ days });
  } catch (error) {
    if (error instanceof ClinikoApiError && error.code === "RATE_LIMITED") {
      return res.status(429).json({
        error: "We're getting a lot of requests right now — please try again in a moment.",
      });
    }
    console.error("available-times error", error);
    return res.status(502).json({
      error: "We couldn't load available times right now. Please try again shortly.",
    });
  }
}
