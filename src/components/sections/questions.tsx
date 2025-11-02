import { Button } from "../button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils";

export const Questions = () => {
  return (
    <div
      id="questions"
      className={cn(
        "flex min-h-[500px] w-full flex-col items-center justify-center gap-6 bg-white px-4 pb-20 pt-10 md:px-20"
      )}
    >
      <h2 className="text-center">
        Got Questions?
        <span className="text-primary">
          <br />
          We Have Answers
        </span>
      </h2>

      <p className="max-w-[500px] text-center text-base text-neutral-700">
        Speak to the chatbot in the corner or click below for more information.
      </p>

      <a href="https://www.aion-clinic.com/#questions">
        <Button className="text-lg">
          Go to FAQs <ArrowRight className="ml-2 w-4" />
        </Button>
      </a>
    </div>
  );
};
