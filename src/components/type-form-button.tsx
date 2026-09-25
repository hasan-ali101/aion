import { useRouter } from "next/router";
import { PopupButton } from "@typeform/embed-react";
import { cn } from "@/utils";

export const TypeFormButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();

   const hidden: Record<string, string> = {};
  if (router.isReady) {
    ["utm_source", "utm_medium", "utm_campaign", "utm_content"].forEach((key) => {
      const value = router.query[key];
      if (typeof value === "string") hidden[key] = value;
    });
  }
  
  return (
    <PopupButton id="AWkY9GvF" hidden={hidden} className={cn(className)}>
      {children}
    </PopupButton>
  );
};