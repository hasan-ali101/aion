import { cn } from "@/utils";

export type LocationType = "remote" | "in-person";

interface LocationStepProps {
  value: LocationType | null;
  onChange: (value: LocationType) => void;
}

export function LocationStep({ value, onChange }: LocationStepProps) {
  return (
    <div className="rounded-xl border border-muted bg-beige/40 p-4">
      <p className="mb-3 text-sm font-medium text-primaryDark">
        Would you like this appointment remote or in person?
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onChange("remote")}
          className={cn(
            "flex-1 rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
            value === "remote"
              ? "border-primary bg-primary text-white"
              : "border-muted bg-white text-primaryDark hover:border-primary hover:bg-primary/5",
          )}
        >
          Remote (video call)
        </button>
        <button
          type="button"
          onClick={() => onChange("in-person")}
          className={cn(
            "flex-1 rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
            value === "in-person"
              ? "border-primary bg-primary text-white"
              : "border-muted bg-white text-primaryDark hover:border-primary hover:bg-primary/5",
          )}
        >
          In person
        </button>
      </div>
    </div>
  );
}
