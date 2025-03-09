import Link from "next/link";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { GetStartedButton } from "@/components/get-started-button";
import { Card } from "@/components/card";
import CircleImage from "@/components/circle-image";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
};

const team: TeamMember[] = [
  {
    name: " Dr Matthew Liveras ",
    role: "Consultant Psychiatrist & Chief Medical Officer",
    description:
      "Etiam non purus rutrum, laoreet eros quis, ornare eros. Duis feugiat nulla at ultrices bibendum. Aenean iaculis sapien sed commodo sagittis. Cras suscipit id massa maximus ornare.  Maecenas ac diam vitae augue aliquam facilisis vitae non. Maecenas ac diam vitae augue aliquam facilisis vitae non. ",
    imageUrl: "/images/team_1.png",
  },
  {
    name: " Dr Matthew Liveras ",
    role: "Consultant Psychiatrist & Chief Medical Officer",
    description:
      "Etiam non purus rutrum, laoreet eros quis, ornare eros. Duis feugiat nulla at ultrices bibendum. Aenean iaculis sapien sed commodo sagittis. Cras suscipit id massa maximus ornare.  Maecenas ac diam vitae augue aliquam facilisis vitae non. Maecenas ac diam vitae augue aliquam facilisis vitae non. ",
    imageUrl: "/images/team_2.png",
  },
  {
    name: " Dr Matthew Liveras ",
    role: "Consultant Psychiatrist & Chief Medical Officer",
    description:
      "Etiam non purus rutrum, laoreet eros quis, ornare eros. Duis feugiat nulla at ultrices bibendum. Aenean iaculis sapien sed commodo sagittis. Cras suscipit id massa maximus ornare.  Maecenas ac diam vitae augue aliquam facilisis vitae non. Maecenas ac diam vitae augue aliquam facilisis vitae non. ",
    imageUrl: "/images/team_3.png",
  },
  {
    name: " Dr Matthew Liveras ",
    role: "Consultant Psychiatrist & Chief Medical Officer",
    description:
      "Etiam non purus rutrum, laoreet eros quis, ornare eros. Duis feugiat nulla at ultrices bibendum. Aenean iaculis sapien sed commodo sagittis. Cras suscipit id massa maximus ornare.  Maecenas ac diam vitae augue aliquam facilisis vitae non. Maecenas ac diam vitae augue aliquam facilisis vitae non. ",
    imageUrl: "/images/team_4.png",
  },
];

export const Team = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember>(
    team[1],
  );

  return (
    <div
      id="us"
      className="flex w-full scroll-m-20 justify-center overflow-hidden pb-2 pt-10"
    >
      <div className="flex h-full max-w-[1200px] flex-col gap-10 bg-white p-6 md:flex-row lg:p-10">
        <div className="flex flex-col gap-8 md:w-5/12">
          <h2>
            Meet <span className="text-primary">Our Team</span>
          </h2>
          <p className="font-semibold">
            Professional, quality care delivered by our highly experienced
            clinical team.
          </p>
          <p className="mb-4 hidden md:flex">
            Professional, quality care delivered by our highly experienced
            clinical team Our multidisciplinary team are some of the most
            experienced practitioners in psychedelic treatment in the country,
            ensuring we deliver a safe and effective service for you.
          </p>
          <div className="hidden items-center gap-4 md:flex">
            <GetStartedButton />
            <Link className="text-sm text-primary underline" href="/How">
              How does it work
            </Link>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center gap-6 md:w-7/12">
          <Card className="flex max-w-[600px] flex-col gap-2 bg-secondary p-4 md:p-6">
            <div className="flex items-center gap-2">
              <CircleImage
                src={selectedTeamMember.imageUrl}
                width={1400}
                height={1400}
                alt={selectedTeamMember.name}
                className="h-24 min-h-24 w-24 min-w-24 md:h-32 md:min-h-32 md:w-32 md:min-w-32"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold">{selectedTeamMember.name}</p>
                <p className="text-sm font-medium text-primary">
                  {selectedTeamMember.role}
                </p>
                <p className="hidden text-sm lg:flex">
                  {selectedTeamMember.description}
                </p>
              </div>
            </div>
            <p className="flex text-sm lg:hidden">
              {selectedTeamMember.description}
            </p>
          </Card>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-xs"
          >
            <CarouselContent>
              {team.map((teamMember, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3"
                  onClick={() => setSelectedTeamMember(teamMember)}
                >
                  <CircleImage
                    src={teamMember.imageUrl}
                    alt={teamMember.name}
                    width={1400}
                    height={1400}
                    className="h-20 min-h-20 w-20 min-w-20 cursor-pointer"
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
          </Carousel>
        </div>
      </div>
    </div>
  );
};
