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
import CircleImage from "@/components/circle-image";
import { cn } from "@/utils";

type TeamMember = {
  name: string;
  role: string;
  description: string | JSX.Element;
  imageUrl: string;
};

const team: TeamMember[] = [
  {
    name: " Dr Matthew Liveras ",
    role: "Consultant Psychiatrist & Chief Medical Officer",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Matt is a consultant psychiatrist and group analytic psychotherapist with many years’ 
          experience across inpatient and community settings in the NHS, private and third sectors. 
          He was previously the Medical Lead to Awakn’s London clinic, which offered ketamine-assisted psychotherapy. 
        </p>
        <p>
          His approach is informed by the idea that many of the problems we experience, as well as the resources to improve 
          these, can be found in our relationships with others.        </p>
      </div>
    ),
    imageUrl: "/images/team_1.png",
  },
  {
    name: "Dr Qasim Ali",
    role: "Chief Executive Officer",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          As Chief Executive Officer of Aion, Qasim is excited to change the
          perception around psychedelic medicine and deliver transformative
          experiences to those most in need.
        </p>
        <p>
          Qasim is a qualified medical doctor, graduating from Imperial College
          London in 2019, with experience supporting large-scale strategic
          initiatives across a range of private and public health bodies,
          including NEOM and NHS. He has successfully helped found and launch
          several high-growth health startups to date.
        </p>
      </div>
    ),
    imageUrl: "/images/team_2.png",
  },
  {
    name: "Laura Gallagher",
    role: "Clinic Manager & Chief Operating Officer ",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          As Chief Operating Officer, Laura brings an inclusive and
          patient-centric culture to Aion, ensuring we consistently delivering
          outstanding care to all our patients.
        </p>
        <p>
          Laura brings operational, strategic, and regulatory expertise to Aion,
          with over 22 years of experience in substance misuse services across
          the public, private, and voluntary sectors. Her significant experience
          in managing the most vulnerable patients in a sensitive, considerate
          manner, ensures our patients feel comfortable and safe throughout.
        </p>
      </div>
    ),
    imageUrl: "/images/team_3.png",
  },
  {
    name: "Dominic Riches",
    role: "Cognitive Behavioural Psychotherapist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Dominic is a Cognitive Behavioural Therapist and mindfulness teacher
          with 20+ years experience working in the NHS and privately, supporting
          clients with common mental health problems such as depression, anxiety
          and PTSD.
        </p>
        <p>
          He primarily uses third-wave CBT approaches such as Acceptance and
          Commitment Therapy, Compassion-Focussed Therapy and other
          mindfulness-based approaches. He is an accredited member of the BABCP
          and has post-graduate training in Interpersonal Therapy, with his own
          meditation practice for over 20 years.
        </p>
      </div>
    ),
    imageUrl: "/images/team_4.png",
  },
  {
    name: "Carol Lawrence",
    role: "Cognitive Behavioural Psychotherapist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Carol is a BABCP and IPT UK accredited Cognitive Behavioural Psychotherapist 
          and an Interpersonal Psychotherapist.  She began her career as a mental health 
          social worker working with more severe and enduring mental health conditions. 
          She has experience working for the NHS in both Primary and Secondary Care Settings.
        </p>
        <p>
          Carol is passionate about exploring alternative therapy models, such as Internal 
          Family Systems (IFS).  She has received training in MDMA Assisted Therapy via the 
          Multidisciplinary Association for Psychedelic Studies (MAPS).
        </p>
      </div>
    ),
    imageUrl: "/images/team_5.png",
  },

];

export const Team = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember>(
    team[0],
  );
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
    console.log(api.selectedScrollSnap() + 1);
  }, [api]);

  console.log(current, "of", count);

  return (
    <div
      id="us"
      className="flex w-full scroll-m-20 justify-center overflow-hidden bg-white py-14"
    >
      <div className="flex h-full max-w-section flex-col items-center gap-8 bg-white p-6 sm:px-10 md:px-20 lg:px-40">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2>
            Meet <span className="text-primary">Our Team</span>
          </h2>
          <p className="font-semibold">
            Professional, quality care delivered by our highly experienced
            clinical team.
          </p>
          <p className="mb-4 hidden lg:flex">
            Our multidisciplinary team are some of the most experienced
            practitioners in psychedelic treatment in the country, ensuring we
            deliver a safe and effective service for you.
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center gap-6">
          <Card className="flex flex-col gap-2 bg-secondary p-8">
            <div className="flex items-center gap-4">
              <CircleImage
                src={selectedTeamMember.imageUrl}
                width={1400}
                height={1400}
                alt={selectedTeamMember.name}
                className="float-left h-24 min-h-24 w-24 min-w-24 lg:h-32 lg:min-h-32 lg:w-32 lg:min-w-32"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold lg:text-lg">
                  {selectedTeamMember.name}
                </p>
                <p className="text-sm font-semibold text-primary lg:text-sm">
                  {selectedTeamMember.role}
                </p>
                <div className="hidden text-sm md:flex lg:text-sm">
                  {selectedTeamMember.description}
                </div>
              </div>
            </div>
            <div className="flex text-sm md:hidden lg:text-sm">
              {selectedTeamMember.description}
            </div>
          </Card>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
            }}
            className="w-full max-w-xs md:max-w-md"
          >
            <CarouselContent>
              {team.map((teamMember, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 md:basis-1/4"
                  onClick={() => setSelectedTeamMember(teamMember)}
                >
                  <CircleImage
                    src={teamMember.imageUrl}
                    alt={teamMember.name}
                    width={1400}
                    height={1400}
                    className={cn(
                      selectedTeamMember.name === teamMember.name &&
                        "border-4 border-primary/50",
                      "h-20 min-h-20 w-20 min-w-20 cursor-pointer",
                    )}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex w-full justify-center gap-4 sm:hidden">
              <CarouselPrevious className="sticky" />
              <CarouselNext className="sticky" />
            </div>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
            {/* <div className="mt-4 flex w-full justify-center gap-2 sm:hidden">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  className={cn(
                    current === index + 1 ? "bg-tertiary" : "bg-tertiary/20",
                    "h-2 w-2 rounded-full border border-black",
                  )}
                ></div>
              ))}
            </div> */}
          </Carousel>
        </div>
        {/* <div className="hidden flex-1 items-end lg:flex">
          <div className="flex items-center gap-x-4 pt-6">
            <Link className="text-sm text-primary underline" href="/#how">
              <Button variant="inverted" className="border border-primary/30">
                {" "}
                How does it work
              </Button>
            </Link>
            <GetStartedButton />
          </div>
        </div> */}
      </div>
    </div>
  );
};
