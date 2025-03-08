import { CheckCircle, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "./card";
import { cn } from "@/utils";
import { useState } from "react";

type CardCollapsible = {
  className?: string;
  title: string;
  content: string;
};

const CardCollapsible = ({ className, title, content }: CardCollapsible) => {
  const [expanded, setExpanded] = useState(false);

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
        <ChevronDown
          className={cn(
            expanded && "rotate-180",
            "h-6 min-h-6 w-6 min-w-6 text-primary transition-all",
          )}
        />
      </CardHeader>
      <CardContent
        className={cn(
          expanded ? "h-full max-h-80" : "h-0 max-h-0",
          "overflow-clip px-10 transition-all duration-300 ease-in-out",
        )}
      >
        <div className="py-2">{content}</div>
      </CardContent>
    </Card>
  );
};

export default CardCollapsible;
