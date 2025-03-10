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
          Matt is a consultant psychiatrist and group analytic psychotherapist
          with many years of experience as a clinician across a range of
          inpatient and community settings with both the NHS and privately.
        </p>
        <p>
          He studied medicine and medical anthropology at University College
          London and trained in Psychiatry at UCL. 
        </p>
        <p>
          He is now the Chief Medical Officer at Aion where he is excited to be
          so closely involved in caring for our clients and developing the
          therapies we offer.
        </p>
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
          Dr. Qasim Ali is a qualified medical doctor, graduating from Imperial
          College London in 2019.
        </p>
        <p>
          He has since applied his knowledge and understanding of healthcare
          across a range of senior roles, most notably supporting on large-scale
          strategy initiatives with internationally recognised bodies such as
          NEOM and the NHS.
        </p>
        <p>
          He has helped found and launch several high-growth startups to date,
          centred around a passion to rethink and improve the way we care for
          the most vulnerable in our community.
        </p>
        <p>
          He is now Chief Executive Officer and Founder of Aion where he is
          excited to change the perception around psychedelic medicine and
          deliver transformative experiences to those most in need.
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
          Laura brings operational, strategic, and regulatory expertise to Aion,
          with over 22 years of experience in substance misuse services across
          the public, private, and voluntary sectors.
        </p>
        <p>
          She brings an inclusive and patient-centric culture to Aion, ensuring
          we are clear and aligned on delivering outstanding care to all our
          patients.
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
          with many years’ experience working in the NHS and privately,
          supporting clients with common mental health problems such as
          depression, anxiety and post-traumatic stress.
        </p>
        <p>
          He primarily uses third-wave CBT approaches such as Acceptance and
          Commitment Therapy, Compassion-Focussed Therapy and other
          Mindfulness-based approaches. He has seen how helpful they can be in
          integrating psychedelic experiences. He is an accredited member of the
          BABCP and has post-graduate training in Interpersonal Therapy. He has
          had a meditation practice for over 20 years.
        </p>
        <p>
          “My personal experience of how psychedelics can loosen rigid
          repertoires of thinking and behaving has inspired me to work with my
          clients in this way.”
        </p>
      </div>
    ),
    imageUrl: "/images/team_4.png",
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
      className="flex w-full scroll-m-20 justify-center overflow-hidden py-14"
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
