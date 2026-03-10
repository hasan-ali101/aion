import Link from "next/link";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";

export const Questions = () => {
  return (
    <div
      id="questions"
      className="flex min-h-[500px] w-full flex-col items-center justify-center gap-10 bg-white px-4 py-20 md:px-20"
    >
      <h2 className="text-center">
        Got Questions?
        <span className="text-primary">
          <br />
          We Have Answers
        </span>
      </h2>
      <p className="max-w-[500px] text-center text-neutral-700">
        Speak to the chatbot in the corner or click below for more information.
      </p>
      <Link href="https://www.aion-clinic.com/#questions">
        <Button className="text-lg">
          Go to FAQs <ArrowRight className="w-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
};