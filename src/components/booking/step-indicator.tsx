import { cn } from "@/utils";

interface StepIndicatorProps {
  steps: string[];
  currentIndex: number;
}

export function StepIndicator({ steps, currentIndex }: StepIndicatorProps) {
  return (
    <ol className="flex items-center gap-2 text-xs font-medium text-black/40">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full border",
              index <= currentIndex
                ? "border-primary bg-primary text-white"
                : "border-muted text-black/40",
            )}
          >
            {index + 1}
          </span>
          <span className={cn(index === currentIndex && "font-semibold text-primaryDark")}>
            {step}
          </span>
          {index < steps.length - 1 && <span className="mx-1 h-px w-4 bg-muted" />}
        </li>
      ))}
    </ol>
  );
}
