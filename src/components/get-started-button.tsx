import { ArrowRight } from "lucide-react";
import { TypeFormButton } from "./type-form-button";
import { cn } from "@/utils";

const GetStartedButton = ({
  variant = "default",
}: {
  variant?: "default" | "inverted";
}) => {
  console.log(variant);
  return (
    <TypeFormButton>
      <div
        className={cn(
          variant === "default"
            ? "bg-primary/90 text-white shadow hover:bg-primary/80"
            : "bg-white text-primary shadow hover:bg-white/90",
          "focus-visible:ring-ring inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-3xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        )}
      >
        Get Started <ArrowRight className="w-4" />
      </div>
    </TypeFormButton>
  );
};

export { GetStartedButton };
