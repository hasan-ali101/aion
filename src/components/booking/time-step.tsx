import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

import { cn } from "@/utils";
import { londonDayLabel } from "@/lib/cliniko/timezone";
import { TimeSlotList } from "./time-slot-list";

interface AvailableDay {
  date: string;
  slots: string[];
}

interface TimeStepProps {
  serviceId: string;
  selectedSlot: string | null;
  onSelectSlot: (slot: string) => void;
}

const WINDOW_DAYS = 6;

function todayLondonDate(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London" }).format(new Date());
}

function addDays(dateStr: string, days: number): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function TimeStep({ serviceId, selectedSlot, onSelectSlot }: TimeStepProps) {
  const todayKey = useMemo(() => todayLondonDate(), []);
  const [windowStart, setWindowStart] = useState(todayKey);
  const [days, setDays] = useState<AvailableDay[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const canGoBack = windowStart > todayKey;

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`/api/cliniko/available-times?serviceId=${serviceId}&from=${windowStart}`)
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok) throw new Error(body.error || "Failed to load available times");
        return body.days as AvailableDay[];
      })
      .then((result) => {
        if (cancelled) return;
        setDays(result);
        setSelectedDate(result.find((day) => day.slots.length > 0)?.date ?? result[0]?.date ?? null);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load available times");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [serviceId, windowStart]);

  const selectedDaySlots = days.find((day) => day.date === selectedDate)?.slots ?? [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous days"
          disabled={!canGoBack}
          onClick={() => setWindowStart((prev) => addDays(prev, -WINDOW_DAYS))}
          className="shrink-0 rounded-full border border-muted p-2 text-primaryDark transition-opacity disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex flex-1 gap-2 overflow-x-auto">
          {days.map((day) => (
            <button
              key={day.date}
              type="button"
              onClick={() => setSelectedDate(day.date)}
              disabled={day.slots.length === 0}
              className={cn(
                "flex shrink-0 flex-col items-center rounded-xl border px-4 py-2 text-xs font-medium transition-colors",
                day.date === selectedDate
                  ? "border-primary bg-primary text-white"
                  : "border-muted bg-white text-primaryDark",
                day.slots.length === 0 && "opacity-30",
              )}
            >
              {londonDayLabel(`${day.date}T12:00:00Z`)}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next days"
          onClick={() => setWindowStart((prev) => addDays(prev, WINDOW_DAYS))}
          className="shrink-0 rounded-full border border-muted p-2 text-primaryDark"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {loading && (
        <div className="flex justify-center py-10">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
      )}

      {error && !loading && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      {!loading && !error && (
        <TimeSlotList slots={selectedDaySlots} selectedSlot={selectedSlot} onSelectSlot={onSelectSlot} />
      )}
    </div>
  );
}
