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
import Image from "next/image";

export type Step = {
  title: string | JSX.Element;
  description: string | JSX.Element;
  icon?: JSX.Element;
  info?: JSX.Element;
};

const screeningSteps: Step[] = [
  {
    title: "Submit self referral form",
    description:
      "Complete our simple online referral form (~5 minutes) where we ask you to share basic health information about yourself and your case for our clinical team to review.",
    icon: <FileText className="min-h-7 min-w-7" />,
  },
  {
    title: "Gather relevant documentation",
    icon: <FolderCheck className="min-h-7 min-w-7" />,
    description:
      "In order to provide safe treatment we will need to see a copy of your GP Summary Care Record; with your consent, we are happy to request this on your behalf.",
  },
  {
    title: "Initial Medical Consultation",
    icon: <ShieldPlus className="min-h-7 min-w-7" />,
    description:
      "Once clinically reviewed, you are invited to a 1.5 hr session with our consultant psychiatrist to explore your case in detail and confirm that this is the right treatment for you.",
  },
];

export const How = () => {
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
    <div className="flex w-full justify-center bg-white">
      <div
        id="how"
        className="flex w-full max-w-section scroll-m-10 flex-col items-center gap-8 bg-white px-6 pb-24 pt-20 text-center"
      >
        <h2>
          Start treatment within <br />
          <span className="text-primary">2 weeks from today</span>
        </h2>
        <p className="max-w-[600px]">
          We take care to ensure each patient is suitable for our treatment,
          screening for eligibility criteria and risk factors.
        </p>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="w-[85%] max-w-[600px]"
        >
          <CarouselContent>
            {screeningSteps.map((step, index) => (
              <CarouselItem key={index} className="flex flex-col items-center">
                <Card className="relative flex h-full flex-col items-center justify-center gap-3 overflow-clip rounded-lg bg-primary px-4 py-6 text-white sm:h-64 lg:h-full lg:py-8">
                  <Image
                    alt="alt"
                    width={1200}
                    height={1000}
                    src={"/images/circles.jpg"}
                    className={cn(
                      index === 0 && "left-0",
                      index === 1 && "left-auto",
                      index > 1 && "right-0",
                      "pointer-events-none absolute min-h-full min-w-[800px] select-none opacity-20 sm:h-64",
                    )}
                  />
                  {step.icon}
                  <p className="text-lg font-semibold">{step.title}</p>
                  <p>{step.description}</p>
                  <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold">
                    {current} / 3
                  </div>
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
                    <div className="h-4 w-4 rounded-full bg-primary/60" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary/80 text-white hover:bg-primary/70" />
          <CarouselNext className="bg-primary/80 text-white hover:bg-primary/70" />
        </Carousel>
        <div className="-mt-12 w-screen border border-dashed border-black/30"></div>
        {/* <div className="py-2">
        {current} of {count}
      </div> */}
      </div>
    </div>
  );
};
