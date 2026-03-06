import { useRouter } from "next/router";
import { JSX, useState } from "react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import Image from "next/image";
import { FadeIn } from "../fade-in";

type TeamMember = {
  name: string;
  role: string;
  description: string | JSX.Element;
  imageUrl: string;
};

const getTeam = (isHomePage: boolean): TeamMember[] => [
  {
    name: " Dr Matthew Liveras ",
    role: "Consultant Psychiatrist & Chief Medical Officer",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          {`Matt is a consultant psychiatrist and group analytic psychotherapist
          with many years’ experience across inpatient and community settings in
          the NHS, private and third sectors. He was previously the Medical Lead
          to Awakn’s London clinic, which offered ${isHomePage ? "ketamine" : "medication"}-assisted
          psychotherapy.`}
        </p>
        <p>
          His approach is informed by the idea that many of the problems we
          experience, as well as the resources to improve these, can be found in
          our relationships with others.{" "}
        </p>
      </div>
    ),
    imageUrl: "/images/team_1.1.png",
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
    imageUrl: "/images/team_3.1.png",
  },
  {
    name: "Fardijah Treacher-Morley",
    role: "Psychotherapist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Fardijah is an Integrative Art Psychotherapist with over 20 years in
          the therapeutic field. She is experienced in several areas, including
          trauma, addiction and domestic violence.
        </p>
        <p>
          Fardijah holds a certificate in Psychedelic Assisted Therapies and
          Research from the California Institute of Integral Studies, which
          includes the MAPS MDMA Therapy Training. Fardijah is registered with
          the Health and Care Professions Council (HCPC) and holds a Masters
          Degree in Medical Anthropology, Psychoanalytic and Observational
          Studies, and Integrative Art Psychotherapy.
        </p>
      </div>
    ),
    imageUrl: "/images/team_5.png",
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
          Carol is a BABCP and IPT UK accredited Cognitive Behavioural
          Psychotherapist and an Interpersonal Psychotherapist. She began her
          career as a mental health social worker working with more severe and
          enduring mental health conditions. She has experience working for the
          NHS in both Primary and Secondary Care Settings.
        </p>
        <p>
          Carol is passionate about exploring alternative therapy models, such
          as Internal Family Systems (IFS). She has received training in MDMA
          Assisted Therapy via the Multidisciplinary Association for Psychedelic
          Studies (MAPS).
        </p>
      </div>
    ),
    imageUrl: "/images/team_6.png",
  },
  {
    name: "Dr Laurie Higbed",
    role: "Psychologist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Laurie is an experienced clinical psychologist. Laurie has worked as a
          lead therapist on clinical trials using MDMA and psilocybin-assisted
          psychotherapy. She has a special interest in working with complex
          trauma, addictions and the use of psychedelic therapy to treat a range
          of mental health difficulties.
        </p>
        <p>
          Laurie is registered with the Health and Care Professions Council
          (HCPC) and is a member of the Association of Clinical Psychologists
          (ACPUK).
        </p>
      </div>
    ),
    imageUrl: "/images/team_8.png",
  },
  {
    name: "Steve Harper",
    role: "Lead Nurse",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Steve is a highly experienced nurse with over 30 years in both general
          and psychiatric healthcare. He has worked across NHS and private
          sectors, bringing expertise from diverse settings including community
          mental health, drug and alcohol services, trauma care, and
          ketamine-assisted psychotherapy.
        </p>
        <p>
          Known for his holistic and compassionate approach, Steve specialises
          in supporting individuals through complex mental health and addiction
          challenges.
        </p>
      </div>
    ),
    imageUrl: "/images/team_7.png",
  },
];

export const Team = () => {
  const { pathname } = useRouter();
  const isHomePage = pathname === "/";
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember>(
    getTeam(isHomePage)[0],
  );

  return (
    <div
      id="us"
      className="flex w-full scroll-m-20 justify-center overflow-hidden bg-white py-20"
    >
      <div className="flex h-full max-w-section flex-col items-center gap-10 bg-white">
        <div className="flex max-w-3xl flex-col items-center gap-5 px-5 text-center">
          <h2>
            Meet <span className="text-primary">Our Team</span>
          </h2>
          <p className="font-semibold">
            Professional, quality care delivered by our highly experienced
            clinical team.
          </p>
          <p>
            Our multidisciplinary team are some of the most experienced
            practitioners in psychedelic treatment in the country, ensuring we
            deliver a safe and effective service for you.
          </p>
        </div>
        <Carousel className="flex w-screen justify-center overscroll-x-none px-6 py-6">
          <CarouselContent className="-ml-3 md:-ml-5">
            {getTeam(isHomePage).map((member: TeamMember, i: number) => {
              const { role, name, imageUrl, description } = member;
              return (
                <CarouselItem
                  key={i}
                  className="min-w-80 max-w-80 basis-[80%] select-none pl-3 text-left sm:basis-[40%] md:pl-5 lg:basis-[30%] xl:basis-[23%]"
                >
                  <div
                    key={i}
                    className="flex flex-col gap-3 overflow-clip rounded-t-lg pt-0 font-light"
                  >
                    <div className="group relative h-96 overflow-clip">
                      <Image
                        src={imageUrl}
                        fill={true}
                        alt={"card image"}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 z-20 overflow-auto bg-primary/0 p-6 transition-colors ease-out hover:bg-black/70 active:bg-black/70">
                        <span className="text-primary-foreground text-sm text-white opacity-0 transition-opacity ease-out group-hover:opacity-100 group-active:opacity-100">
                          {description}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="w-full text-left font-medium">{name}</p>
                      <p className="text-muted-foreground w-full text-left text-sm">
                        {role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
