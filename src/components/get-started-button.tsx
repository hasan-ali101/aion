import { Button } from "@/components/button";
import { ArrowRight } from "lucide-react";

const GetStartedButton = ({
  variant,
}: {
  variant?: "default" | "inverted";
}) => {
  return (
    <Button variant={variant} className="font-semibold w-fit">
      Get Started <ArrowRight className="w-4" />
    </Button>
  );
};

export { GetStartedButton };
