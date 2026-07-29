import { useState } from "react";

import { cn } from "@/utils";
import { Button } from "@/components/button";

interface FindPatientStepProps {
  submitting?: boolean;
  onBack: () => void;
  onSubmit: (dateOfBirth: string) => void;
}

export function FindPatientStep({ submitting, onBack, onSubmit }: FindPatientStepProps) {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!dateOfBirth) {
      setError("Enter your date of birth to find your record");
      return;
    }
    if (dateOfBirth > new Date().toISOString().slice(0, 10)) {
      setError("Date of birth can't be in the future");
      return;
    }

    setError(null);
    onSubmit(dateOfBirth);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-sm text-black/70">
        Enter your date of birth so we can find your patient record.
      </p>
      <div>
        <label className="mb-1 block text-sm font-medium text-primaryDark" htmlFor="dateOfBirth">
          Date of birth
        </label>
        <input
          id="dateOfBirth"
          type="date"
          max={new Date().toISOString().slice(0, 10)}
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className={cn(
            "w-full rounded-lg border border-muted px-3 py-2 text-sm text-black outline-none transition-colors focus:border-primary",
            error && "border-red-400",
          )}
        />
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="inverted"
          size="lg"
          onClick={onBack}
          disabled={submitting}
          className="border border-muted shadow-none"
        >
          Previous
        </Button>
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "Searching…" : "Find my record"}
        </Button>
      </div>
    </form>
  );
}
