import { CheckCircle, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "./card";
import { cn } from "@/utils";
import { useState } from "react";

type CardCollapsible = {
  collapsible?: boolean;
  className?: string;
  title: string;
  content: string;
  open?: boolean;
};

const CardCollapsible = ({
  collapsible = true,
  className,
  title,
  content,
  open = false,
}: CardCollapsible) => {
  const [expanded, setExpanded] = useState(open);

  return (
    <Card
      className={cn(className, "w-full cursor-pointer bg-white transition-all")}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <CardHeader className="flex w-full flex-row items-center justify-between gap-2 border-b px-4 py-2 font-semibold">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-6 min-h-6 w-6 min-w-6 text-primary" />
          <p>{title}</p>
        </div>
        {collapsible && (
          <ChevronDown
            className={cn(
              expanded && "rotate-180",
              "h-6 min-h-6 w-6 min-w-6 text-primary transition-all",
            )}
          />
        )}
      </CardHeader>
      <CardContent
        className={cn(
          expanded ? "h-full max-h-80" : "h-0 max-h-0",
          "overflow-clip px-6 transition-all duration-300",
        )}
      >
        <div
          className={cn(
            expanded ? "opacity-100" : "opacity-20",
            "py-4 transition-all duration-500",
          )}
        >
          {content}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardCollapsible;
