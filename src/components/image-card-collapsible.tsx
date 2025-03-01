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
        "min-w-64 w-full max-w-96 flex-1 overflow-clip h-fit transition-colors duration-500 md:duration-200"
      )}
    >
      <CardHeader className="flex-row justify-between gap-2">
        <div className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div
          className={cn(
            expanded ? "bg-white text-primary" : "text-white bg-primary",
            "w-fit h-fit p-2 rounded-full cursor-pointer"
          )}
        >
          <ArrowDown
            className={cn(
              expanded && " rotate-180",
              "w-4 h-4 transition-transform duration-500"
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
            " min-h-full min-w-full select-none z-10 pointer-events-none left-0 pb-10"
          )}
        />
        <div
          className={cn(
            expanded
              ? "h-full max-h-[500px] overflow-auto pb-6"
              : "h-0 max-h-0 lg:h-full lg:max-h-full overflow-clip",
            "transition-all md:duration-200 text-white relative"
          )}
        >
          <div className={cn(!expanded && "lg:hidden", "z-10 sticky")}>
            {content}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageCardCollapsible;
