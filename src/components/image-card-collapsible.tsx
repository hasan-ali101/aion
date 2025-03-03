import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { cn } from "@/utils";
import { JSX, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

type CardExpandableProps = {
  title: string;
  content: JSX.Element | string;
  backgroundImage: string;
  description: JSX.Element | string;
};

const ImageCardCollapsible = ({
  backgroundImage,
  content,
  title,
  description,
}: CardExpandableProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      onClick={() => setExpanded(!expanded)}
      className={cn(
        expanded ? "bg-primary text-white" : "bg-white text-primary",
        "h-fit w-full min-w-64 max-w-96 flex-1 overflow-clip transition-colors duration-500 md:duration-200",
      )}
    >
      <CardHeader className="flex-row justify-between gap-2">
        <div className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div
          className={cn(
            expanded ? "bg-white text-primary" : "bg-primary text-white",
            "h-fit w-fit cursor-pointer rounded-full p-2",
          )}
        >
          <ArrowDown
            className={cn(
              expanded && "rotate-180",
              "h-4 w-4 transition-transform duration-500",
            )}
          />
        </div>
      </CardHeader>
      <CardContent className="relative">
        <Image
          alt="alt"
          width={1200}
          height={1000}
          src={backgroundImage}
          className={cn(
            expanded ? "absolute opacity-10" : "hidden lg:flex",
            "pointer-events-none left-0 z-10 min-h-full min-w-full select-none pb-10",
          )}
        />
        <div
          className={cn(
            expanded
              ? "h-full max-h-[500px] overflow-auto pb-6"
              : "h-0 max-h-0 overflow-clip lg:h-full lg:max-h-full",
            "relative text-white transition-all md:duration-200",
          )}
        >
          <div className={cn(!expanded && "lg:hidden", "sticky z-10")}>
            {content}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageCardCollapsible;
