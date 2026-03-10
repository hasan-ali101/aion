import { PopupButton } from "@typeform/embed-react";
import { cn } from "@/utils";

export const TypeFormButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <PopupButton
      id="qnt54xiK?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_content=xxxxx"
      className={cn(className)}
    >
      {children}
    </PopupButton>
  );
};
