import { FileText, FolderCheck, ShieldPlus } from "lucide-react";
import { JSX, useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { Card } from "@/components/card";
import { cn } from "@/utils";

export type Step = {
  title: string | JSX.Element;
  description: string | JSX.Element;
  icon?: JSX.Element;
};

const screeningSteps: Step[] = [
  {
    title: "Submit self referral",
    description:
      "We check your provided information against your Summary Care Record from your GP, which we are happy to gather on your behalf if you provide consent!",
    icon: <FileText className="min-h-7 min-w-7" />,
  },
  {
    title: "Gather relevant documentation",
    icon: <FolderCheck className="min-h-7 min-w-7" />,
    description:
      "We check your provided information against your Summary Care Record from your GP, which we are happy to gather on your behalf if you provide consent!",
  },
  {
    title: "Initial Medical Assessment",
    icon: <ShieldPlus className="min-h-7 min-w-7" />,
    description:
      "We check your provided information against your Summary Care Record from your GP, which we are happy to gather on your behalf if you provide consent!",
  },
];

export const How = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex max-w-section flex-col items-center gap-8 px-6 py-20 text-center">
      <h2>
        Start treatment within{" "}
        <span className="text-primary">2 weeks from today</span>
      </h2>
      <p>
        We take care to ensure each patient is suitable for the treatment we
        provide, screening for eligibility criteria and risk factors
      </p>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-[85%]"
      >
        <CarouselContent>
          {screeningSteps.map((step, index) => (
            <CarouselItem key={index} className="flex flex-col items-center">
              <Card className="flex h-[350px] flex-col items-center justify-center gap-3 overflow-auto rounded-lg bg-primary px-8 text-white sm:h-64">
                {step.icon}
                <p className="text-lg font-semibold">{step.title}</p>
                <p>{step.description}</p>
              </Card>
              <div className="h-8 border border-dashed border-black/30" />
              <div className="relative flex items-center justify-center">
                <div
                  className={cn(
                    index + 1 === current && "animate-ping",
                    "absolute h-10 w-10 rounded-full bg-primary/15 p-2",
                  )}
                />
                <div className="flex items-center justify-center rounded-full bg-primary/20 p-2">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="-mt-12 w-screen border border-dashed border-black/30"></div>
      <div className="text-muted-foreground py-2 text-center text-sm">
        {current} of {count}
      </div>
    </div>
  );
};
