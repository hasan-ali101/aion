import { cn } from "@/utils";
import { isForcedRemoteSlot, londonHour, londonTimeLabel } from "@/lib/cliniko/timezone";

interface TimeSlotListProps {
  slots: string[];
  selectedSlot: string | null;
  onSelectSlot: (slot: string) => void;
}

const GROUPS: { label: string; test: (hour: number) => boolean }[] = [
  { label: "Morning", test: (hour) => hour < 12 },
  { label: "Afternoon", test: (hour) => hour >= 12 && hour < 17 },
  { label: "Evening", test: (hour) => hour >= 17 },
];

export function TimeSlotList({ slots, selectedSlot, onSelectSlot }: TimeSlotListProps) {
  if (slots.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-black/50">
        No available times on this day. Try another day.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {GROUPS.map((group) => {
        const groupSlots = slots.filter((slot) => group.test(londonHour(slot)));
        if (groupSlots.length === 0) return null;

        return (
          <div key={group.label}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/50">
              {group.label}
            </h4>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {groupSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onSelectSlot(slot)}
                  className={cn(
                    "flex flex-col items-center rounded-xl border px-3 py-2 text-sm font-medium transition-colors",
                    selectedSlot === slot
                      ? "border-primary bg-primary text-white"
                      : "border-muted bg-white text-primaryDark hover:border-primary hover:bg-primary/5",
                  )}
                >
                  {londonTimeLabel(slot)}
                  {isForcedRemoteSlot(slot) && (
                    <span
                      className={cn(
                        "text-[10px] font-normal uppercase tracking-wide",
                        selectedSlot === slot ? "text-white/70" : "text-black/40",
                      )}
                    >
                      remote
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
