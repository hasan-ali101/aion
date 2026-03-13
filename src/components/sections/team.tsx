import { useRouter } from "next/router";
import { JSX, useState } from "react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import Image from "next/image";

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
          perception around the field and deliver transformative
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
    name: "Dr Laurie Higbed",
    role: "Lead Psychologist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Laurie is an experienced clinical psychologist. Laurie has worked as a
          lead therapist on clinical trials, with a special interest in working 
          with complex trauma, addictions and the use of innovative therapy to treat 
          a range of mental health difficulties.
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
    name: "Dr Mia Debidin",
    role: "Lead Clinical Psychologist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Mia is a forensic and clinical psychologist and psychotherapist with
          over 32 years of experience across multiple therapeutic models. Mia is licensed with the HCPC and brings a rich,
          integrative perspective informed by Buddhist psychology, mindfulness,
          meditation, and breathwork.
        </p>
        <p>
          Mia focuses on building skills for healthy
          psychological functioning, helping clients connect conscious and
          unconscious experience, express emotions effectively, and separate
          present reactions from unmet needs of the past.        </p>
      </div>
    ),
    imageUrl: "/images/team_9.png",
  },
  {
    name: "Dr Lisa Harvey",
    role: "Psychotherapist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Lisa is a clinical psychologist with a doctorate specialising in
          cognitive, psychodynamic, behavioural and systemic approaches. She
          works with compassion, curiosity and containment to help people
          move through stuck patterns, limiting thoughts, and emotional
          overwhelm.
        </p>
        <p>
          Her practice draws on CBT, Mindfulness, Acceptance and Commitment
          Therapy, and somatic practices. Lisa is also a qualified yoga and
          bodywork practitioner, and is registered with the HCPC.
        </p>
      </div>
    ),
    imageUrl: "/images/team_10.png",
  },
  {
    name: "Laura Gallagher",
    role: "Clinic Manager",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          As Clinic Manager, Laura brings an inclusive and
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
          Fardijah holds a certificate from CIIS, which
          includes the MAPS MDMA Therapy Training. Fardijah is registered with
          the HCPC and holds a Masters
          Degree in Medical Anthropology, Psychoanalytic and Observational
          Studies, and Integrative Art Psychotherapy.
        </p>
      </div>
    ),
    imageUrl: "/images/team_5.png",
  },
  {
    name: "Abi Dewing",
    role: "Psychotherapist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Abi is an Integrative Psychotherapist with over a decade of experience.
          Her approach draws on a multitude of theories and techniques, adapting
          to the unique needs of each client, with a special interest in parts
          work and helping clients reconnect with their authentic selves.
        </p>
        <p>
          Abi holds a BA (Hons) in Humanistic Counselling Practice and a Masters
          in Integrative Psychotherapy. She is accredited with the National
          Counselling and Psychotherapy Society (NCPS).
        </p>
      </div>
    ),
    imageUrl: "/images/team_11.png",
  },
  {
    name: "Lisa-Marie Koppl-Hurwitz",
    role: "Psychotherapist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Lisa Marie is a BABCP-registered CBT psychotherapist with an MSc in
          Addiction Studies from King's College London, where she also conducted
          clinical research. Her background spans the NHS, private
          practice, and interdisciplinary health research at UCL and the United
          Nations.
        </p>
        <p>
          She works collaboratively and person-centredly, using ACT and
          mindfulness to support clients navigating depression, addiction, trauma,
          and long-term health conditions — helping them turn new insights into
          lasting, meaningful change.
        </p>
      </div>
    ),
    imageUrl: "/images/team_12.png",
  },
  {
    name: "Lorelei Green",
    role: "Psychotherapist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Lorelei is a BACP accredited therapist with a Masters in psychological
          trauma, working primarily from a humanistic and somatic approach. She
          has served as lead therapist on several clinical trials,
          bringing specialist expertise to Aion's work.
        </p>
        <p>
          Her practice draws on person-centred therapy, gestalt, ACT, and a range
          of trauma-informed interventions — adapted flexibly and holistically to
          each individual's unique needs and journey.
        </p>
      </div>
    ),
    imageUrl: "/images/team_13.png",
  },
  {
    name: "Carol Lawrence",
    role: "Psychotherapist",
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
          Assisted Therapy via MAPS.
        </p>
      </div>
    ),
    imageUrl: "/images/team_6.png",
  },
  {
    name: "Steven Ford",
    role: "Psychotherapist",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Steven is an experienced clinical psychologist and qualified clinical
          supervisor with over 14 years of experience, specialising in substance
          misuse and complex trauma. He has experience across both research and clinical
          settings.
        </p>
        <p>
          His collaborative approach draws on ACT, Compassion-Focused Therapy,
          and DBT to build psychological flexibility — helping clients develop a
          shared understanding of their difficulties and work towards a life
          aligned with what truly matters to them.
        </p>
      </div>
    ),
    imageUrl: "/images/team_14.png",
  },
  {
    name: "Dominic Riches",
    role: "Psychotherapist",
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
    name: "Steve Harper",
    role: "Lead Nurse",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Steve is a highly experienced nurse with over 30 years in both general
          and psychiatric healthcare. He has worked across NHS and private
          sectors, bringing expertise from diverse settings including community
          mental health, drug and alcohol services, trauma care.
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
                      <div className="absolute inset-0 z-20 overflow-auto bg-black/70 p-6 opacity-0 transition-opacity ease-out group-hover:opacity-100 group-active:opacity-100">
                        <span className="text-primary-foreground text-sm text-white">
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
