import { useReducer, useState } from "react";

import type { BookableService } from "@/lib/data/booking-services";
import type { PatientCandidate } from "@/lib/cliniko/types";
import { isForcedRemoteSlot, londonDayLabel, londonTimeLabel } from "@/lib/cliniko/timezone";

import { ServiceSummary } from "./service-summary";
import { StepIndicator } from "./step-indicator";
import { TimeStep } from "./time-step";
import { LocationStep, type LocationType } from "./location-step";
import { FindPatientStep } from "./find-patient-step";
import { PatientMatchStep } from "./patient-match-step";
import { BookingError } from "./booking-error";

interface BookingWizardProps {
  service: BookableService;
}

type Step = "time" | "find-patient" | "confirm-patient" | "not-found" | "processing" | "error";

interface WizardState {
  step: Step;
  selectedSlot: string | null;
  locationType: LocationType | null;
  patientId: string | null;
  candidates: PatientCandidate[];
  message: string | null;
  slotTakenBanner: string | null;
}

type Action =
  | { type: "SELECT_SLOT"; slot: string }
  | { type: "SET_LOCATION_TYPE"; locationType: LocationType }
  | { type: "CONTINUE_FROM_TIME" }
  | { type: "BACK_TO_TIME" }
  | { type: "SHOW_CANDIDATES"; candidates: PatientCandidate[] }
  | { type: "NOT_FOUND" }
  | { type: "CONFIRM_PATIENT"; patientId: string }
  | { type: "SLOT_TAKEN"; message: string }
  | { type: "FAIL"; message: string };

const initialState: WizardState = {
  step: "time",
  selectedSlot: null,
  locationType: null,
  patientId: null,
  candidates: [],
  message: null,
  slotTakenBanner: null,
};

function reducer(state: WizardState, action: Action): WizardState {
  switch (action.type) {
    case "SELECT_SLOT":
      return {
        ...state,
        selectedSlot: action.slot,
        locationType: isForcedRemoteSlot(action.slot) ? "remote" : null,
      };
    case "SET_LOCATION_TYPE":
      return { ...state, locationType: action.locationType };
    case "CONTINUE_FROM_TIME":
      if (!state.selectedSlot || !state.locationType) return state;
      // Already found themselves earlier (e.g. bounced back here after a slot-taken retry) — skip re-asking.
      return state.patientId
        ? { ...state, step: "processing", message: null }
        : { ...state, step: "find-patient" };
    case "BACK_TO_TIME":
      return { ...state, step: "time", slotTakenBanner: null };
    case "SHOW_CANDIDATES":
      return { ...state, candidates: action.candidates, step: "confirm-patient" };
    case "NOT_FOUND":
      return { ...state, step: "not-found" };
    case "CONFIRM_PATIENT":
      return { ...state, patientId: action.patientId, step: "processing", message: null };
    case "SLOT_TAKEN":
      return {
        ...state,
        step: "time",
        selectedSlot: null,
        locationType: null,
        slotTakenBanner: action.message,
      };
    case "FAIL":
      return { ...state, step: "error", message: action.message };
    default:
      return state;
  }
}

function messageOf(error: unknown): string {
  return error instanceof Error ? error.message : "Something went wrong. Please try again.";
}

export function BookingWizard({ service }: BookingWizardProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searching, setSearching] = useState(false);

  async function finalizeBooking(patientId: string) {
    try {
      const apptRes = await fetch("/api/cliniko/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: service.id,
          patientId,
          startsAt: state.selectedSlot,
          locationType: state.locationType,
        }),
      });
      const apptBody = await apptRes.json();

      if (!apptRes.ok) {
        if (apptBody.errorCode === "SLOT_UNAVAILABLE") {
          dispatch({ type: "SLOT_TAKEN", message: apptBody.error });
          return;
        }
        throw new Error(apptBody.error || "Failed to create appointment");
      }

      const checkoutRes = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: service.id,
          patientId,
          appointmentId: apptBody.appointmentId,
          locationType: state.locationType,
        }),
      });
      const checkoutBody = await checkoutRes.json();
      if (!checkoutRes.ok) throw new Error(checkoutBody.error || "Failed to set up payment");

      window.location.href = checkoutBody.url;
    } catch (error) {
      dispatch({ type: "FAIL", message: messageOf(error) });
    }
  }

  async function handleFindPatient(dateOfBirth: string) {
    setSearching(true);
    try {
      const res = await fetch(`/api/cliniko/patients?dob=${encodeURIComponent(dateOfBirth)}`);
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Failed to look up your record");

      const candidates = body.candidates as PatientCandidate[];
      if (candidates.length > 0) {
        dispatch({ type: "SHOW_CANDIDATES", candidates });
      } else {
        dispatch({ type: "NOT_FOUND" });
      }
    } catch (error) {
      dispatch({ type: "FAIL", message: messageOf(error) });
    } finally {
      setSearching(false);
    }
  }

  function handlePatientConfirm(patientId: string | null) {
    if (patientId === null) {
      dispatch({ type: "NOT_FOUND" });
      return;
    }
    dispatch({ type: "CONFIRM_PATIENT", patientId });
    finalizeBooking(patientId);
  }

  const stepIndex = {
    time: 0,
    "find-patient": 1,
    "confirm-patient": 1,
    "not-found": 1,
    processing: 2,
    error: 2,
  }[state.step];

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-10 sm:px-6">
      <ServiceSummary service={service} />
      <StepIndicator steps={["Time", "Find your record", "Payment"]} currentIndex={stepIndex} />

      {state.selectedSlot && state.step !== "time" && (
        <p className="text-sm text-black/60">
          Selected time:{" "}
          <span className="font-medium text-primaryDark">
            {londonDayLabel(state.selectedSlot)} at {londonTimeLabel(state.selectedSlot)}
            {state.locationType && ` (${state.locationType === "remote" ? "remote" : "in person"})`}
          </span>
        </p>
      )}

      {state.step === "time" && (
        <div className="flex flex-col gap-4">
          {state.slotTakenBanner && <BookingError message={state.slotTakenBanner} />}
          <TimeStep
            serviceId={service.id}
            selectedSlot={state.selectedSlot}
            onSelectSlot={(slot) => dispatch({ type: "SELECT_SLOT", slot })}
          />

          {state.selectedSlot && !isForcedRemoteSlot(state.selectedSlot) && (
            <LocationStep
              value={state.locationType}
              onChange={(locationType) => dispatch({ type: "SET_LOCATION_TYPE", locationType })}
            />
          )}

          <button
            type="button"
            disabled={!state.selectedSlot || !state.locationType}
            onClick={() => dispatch({ type: "CONTINUE_FROM_TIME" })}
            className="self-end rounded-3xl bg-primary px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      )}

      {state.step === "find-patient" && (
        <FindPatientStep
          submitting={searching}
          onBack={() => dispatch({ type: "BACK_TO_TIME" })}
          onSubmit={handleFindPatient}
        />
      )}

      {state.step === "confirm-patient" && (
        <PatientMatchStep
          candidates={state.candidates}
          onBack={() => dispatch({ type: "BACK_TO_TIME" })}
          onConfirm={handlePatientConfirm}
        />
      )}

      {state.step === "not-found" && (
        <div className="rounded-xl border border-muted bg-beige/40 p-4 text-sm text-black/70">
          Unfortunately we are unable to locate your patient record. Please email{" "}
          <a href="mailto:support@aion-clinic.com" className="font-medium text-primary underline">
            support@aion-clinic.com
          </a>{" "}
          for further support.
        </div>
      )}

      {state.step === "processing" && (
        <p className="py-10 text-center text-sm text-black/60">Setting up your appointment…</p>
      )}

      {state.step === "error" && (
        <BookingError
          message={state.message ?? "Something went wrong. Please try again."}
          actionLabel="Start over"
          onAction={() => dispatch({ type: "BACK_TO_TIME" })}
        />
      )}
    </div>
  );
}
