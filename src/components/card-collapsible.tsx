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
      className={cn(className, "bg-white  w-full transition-all")}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <CardHeader className="font-semibold border-b flex flex-row w-full justify-between items-center gap-2 px-4 py-2">
        <div className="flex gap-3 items-center">
          <CheckCircle className="text-primary min-w-5 min-h-5 w-5 h-5" />
          <p>{title}</p>
        </div>
        <ChevronDown
          className={cn(
            expanded && "rotate-180",
            "transition-all w-6 h-6 min-w-6 min-h-6 text-primary"
          )}
        />
      </CardHeader>
      <CardContent
        className={cn(
          expanded ? "max-h-80 py-4" : "max-h-0",
          "overflow-hidden transition-all duration-300 px-10"
        )}
      >
        {content}
      </CardContent>
    </Card>
  );
};

export default CardCollapsible;
