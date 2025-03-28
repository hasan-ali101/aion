import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { CheckBullet } from "@/components/check-bullet";
import { Card } from "@/components/card";
import { cn } from "@/utils";
import { Step } from "./how";
import Image from "next/image";

const treatmentSteps: Step[] = [
  {
    title: (
      <div>
        Week 1 - 2<br /> Foundational
      </div>
    ),
    description:
      "We begin with two sessions of talking therapy, where we explore your targets for the programme and begin engaging with ACT therapy.",
    info: (
      <CheckBullet className="text-left text-sm font-medium">
        2 Talking Therapy sessions
      </CheckBullet>
    ),
  },
  {
    title: (
      <div>
        Week 3 - 6<br /> Active
      </div>
    ),
    description:
      "Ketamine sessions are followed by talking therapy the next day to discuss and integrate experiences, supporting therapeutic change.",
    info: (
      <div>
        <CheckBullet className="text-left text-sm font-medium">
          4 Ketamine Sessions
        </CheckBullet>
        <CheckBullet className="text-left text-sm font-medium">
          4 Talking Therapy sessions{" "}
        </CheckBullet>
      </div>
    ),
  },
  {
    title: (
      <div>
        Week 8<br /> Reflective
      </div>
    ),
    description:
      "Following a week’s break to consolidate changes, we conclude with a final therapy session to review progress and plan next steps",
    info: (
      <CheckBullet className="text-left text-sm font-medium">
        1 Talking Therapy session{" "}
      </CheckBullet>
    ),
  },
];

export const Programme = () => {
  const [cardExpanded, setCardExpanded] = useState<Record<number, boolean>>({
    0: false,
    1: true,
    2: false,
  });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      id="programme"
      className="flex w-full flex-col items-center gap-y-6 bg-secondary px-6 py-20 text-center lg:px-12"
    >
      <h2>
        Experience tangible, <br />
        <span className="text-primary">lasting results within 8 weeks</span>
      </h2>
      <p className="max-w-[600px]">
        Our evidence-based approach combines transformative talking therapy
        with precise ketamine treatment to facilitate therapeutic change and 
        deliver life-changing experiences.
      </p>
      <div className="flex flex-col items-center gap-1">
        <CheckBullet>Clinically tested and validated</CheckBullet>
        <CheckBullet>Evidence based protocol</CheckBullet>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-[85%] max-w-section lg:w-full"
      >
        <CarouselContent>
          {treatmentSteps.map((step, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-end lg:basis-1/3"
            >
              <Card
                onClick={() =>
                  setCardExpanded((prev) => ({
                    ...prev,
                    [index]: !prev[index],
                  }))
                }
                className={cn(
                  cardExpanded[index]
                    ? "h-full lg:bg-tertiary lg:text-white"
                    : "lg:bg-white lg:text-primary/80",
                  "pointer-events-none relative flex w-full flex-col items-center justify-center gap-3 overflow-clip rounded-lg bg-tertiary px-4 py-8 text-white duration-300 lg:pointer-events-auto lg:cursor-pointer",
                )}
              >
                <Image
                  alt="alt"
                  width={1200}
                  height={1000}
                  src={"/images/circles.jpg"}
                  className={cn(
                    index === 0 && "left-0",
                    index === 1 && "left-auto",
                    index > 1 && "right-0",
                    "pointer-events-none absolute min-h-full min-w-[800px] select-none opacity-20",
                  )}
                />
                {step.icon && step.icon}
                <div className="text-xl font-semibold">{step.title}</div>
                <div className="flex flex-col items-center gap-4">
                  <p className={cn(!cardExpanded[index] && "lg:hidden")}>
                    {" "}
                    {step.description}
                  </p>
                  {step.info}
                </div>
                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold lg:hidden">
                  {current} / 3
                </div>
              </Card>
              <div className="h-8 border border-dashed border-black/30" />
              <div className="relative flex items-center justify-center">
                <div
                  className={cn(
                    index + 1 === current && "animate-ping lg:animate-none",
                    "absolute h-10 w-10 rounded-full bg-primary/15 p-2",
                  )}
                />
                <div className="flex items-center justify-center rounded-full bg-primary/20 p-2">
                  <div className="h-4 w-4 rounded-full bg-tertiary/60" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-tertiary/80 text-white hover:bg-tertiary/70 lg:hidden" />
        <CarouselNext className="bg-tertiary/80 text-white hover:bg-tertiary/70 lg:hidden" />
      </Carousel>

      <div className="-mt-10 w-screen border border-dashed border-black/30" />
      <div className="hidden w-full max-w-section items-start justify-end lg:flex">
        <div className="-mr-3 -mt-9 flex items-center justify-center rounded-full bg-tertiary/30 p-1">
          <div className="h-3 w-3 rounded-full bg-tertiary/30"></div>
        </div>
        <div className="-mt-6 h-14 w-px border border-dashed border-black/30" />
        <div className="mt-4 flex items-center">
          <div className="h-px w-10 border border-dashed border-black/30" />
          <Card className="mr-44 w-fit bg-white px-4 py-1 text-sm">
            Week 7 Break
          </Card>
        </div>
      </div>
      {/* <div className="py-2">
        {current} of {count}
      </div> */}
    </div>
  );
};
