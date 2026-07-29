import { useState } from "react";

import { cn } from "@/utils";
import { Button } from "@/components/button";
import type { PatientCandidate } from "@/lib/cliniko/types";

interface PatientMatchStepProps {
  candidates: PatientCandidate[];
  submitting?: boolean;
  onBack: () => void;
  onConfirm: (patientId: string | null) => void;
}

const NOT_ME_OPTION = "__new_patient__";

export function PatientMatchStep({ candidates, submitting, onBack, onConfirm }: PatientMatchStepProps) {
  const [selected, setSelected] = useState<string>(
    candidates.length === 1 ? candidates[0].patientId : "",
  );

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-black/70">
        We found an existing record with this date of birth. Is one of these you?
      </p>

      <div className="flex flex-col gap-2">
        {candidates.map((candidate) => (
          <label
            key={candidate.patientId}
            className={cn(
              "flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition-colors",
              selected === candidate.patientId
                ? "border-primary bg-primary/5"
                : "border-muted bg-white",
            )}
          >
            <span>
              <span className="block font-medium text-primaryDark">
                {candidate.firstName} {candidate.lastName}
              </span>
              <span className="block text-xs text-black/50">
                {[candidate.maskedEmail, candidate.maskedPhone].filter(Boolean).join(" · ")}
              </span>
            </span>
            <input
              type="radio"
              name="patient-match"
              className="h-4 w-4 text-primary focus:ring-primary"
              checked={selected === candidate.patientId}
              onChange={() => setSelected(candidate.patientId)}
            />
          </label>
        ))}

        <label
          className={cn(
            "flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition-colors",
            selected === NOT_ME_OPTION ? "border-primary bg-primary/5" : "border-muted bg-white",
          )}
        >
          <span className="font-medium text-primaryDark">None of these are me</span>
          <input
            type="radio"
            name="patient-match"
            className="h-4 w-4 text-primary focus:ring-primary"
            checked={selected === NOT_ME_OPTION}
            onChange={() => setSelected(NOT_ME_OPTION)}
          />
        </label>
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
        <Button
          type="button"
          size="lg"
          disabled={!selected || submitting}
          onClick={() => onConfirm(selected === NOT_ME_OPTION ? null : selected)}
        >
          {submitting ? "Please wait…" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
