export const CLINIC_TIME_ZONE = "Europe/London";

const dateKeyFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: CLINIC_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const hourFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: CLINIC_TIME_ZONE,
  hour: "numeric",
  hourCycle: "h23",
});

const timeLabelFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: CLINIC_TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const dayLabelFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: CLINIC_TIME_ZONE,
  weekday: "short",
  day: "numeric",
  month: "short",
});

const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: CLINIC_TIME_ZONE,
  weekday: "short",
});

/** The clinic's local calendar date (YYYY-MM-DD) for a given ISO instant. */
export function londonDateKey(isoString: string): string {
  return dateKeyFormatter.format(new Date(isoString));
}

/** The clinic's local hour-of-day (0-23) for a given ISO instant. */
export function londonHour(isoString: string): number {
  return Number(hourFormatter.format(new Date(isoString)));
}

/** e.g. "9:00 am" in clinic-local time. */
export function londonTimeLabel(isoString: string): string {
  return timeLabelFormatter.format(new Date(isoString)).toLowerCase();
}

/** e.g. "Thu, 30 Jul" in clinic-local time. */
export function londonDayLabel(isoString: string): string {
  return dayLabelFormatter.format(new Date(isoString));
}

/** True for Saturday/Sunday in clinic-local time. */
export function isLondonWeekend(isoString: string): boolean {
  const day = weekdayFormatter.format(new Date(isoString));
  return day === "Sat" || day === "Sun";
}

/** Weekday evening slots (>=17:00) are always remote; everything else offers a choice. */
export function isForcedRemoteSlot(isoString: string): boolean {
  return !isLondonWeekend(isoString) && londonHour(isoString) >= 17;
}
