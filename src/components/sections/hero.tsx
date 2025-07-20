import { ArrowRight, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CirclesAnimation from "../circles-animation";
import { TypeFormButton } from "../type-form-button";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();
  const { condition } = router.query;

  let title = "Welcome to Aion Clinic";
  let subtitle =
    "Ketamine-assisted psychotherapy treatment for mental health and addiction";

  switch (condition) {
    case "anxiety-treatment-clinic-uk":
      title = "Private Anxiety Treatment in London";
      subtitle =
        "Discover our personalised 8-week anxiety-treatment programme delivered by expert clinicians";
      break;
    case "depression-treatment-clinic-uk":
      title = "Private Depression Treatment in London";
      subtitle =
        "Discover our evidence-based 8-week depression-treatment programme delivered by expert clinicians";
      break;
    case "mental-health-clinic":
      title = "Private Mental Health Clinic in London";
      subtitle =
        "Evidence-based innovative mental health care with same-week consultant assessment";
      break;
  }

  return (
    <div className="relative flex w-full items-center justify-center bg-primaryDark text-white">
      <CirclesAnimation />
      <div className="mb-28 mt-28 flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center md:gap-8">
        <h1 className="mx-4 max-w-[700px]">{title}</h1>
        <p className="max-w-[480px] text-lg font-medium sm:text-lg md:text-xl">
          {subtitle}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-4 text-left md:flex-row">
          <TypeFormButton className="h-40 w-full overflow-clip rounded-xl bg-primary pl-4 pt-4 font-medium md:max-w-64">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-white">Start your referral</p>
                <div className="flex items-center justify-center rounded-full bg-primaryDark p-2">
                  <ArrowRight className="h-5 w-5 stroke-white" />
                </div>
              </div>
              <div className="flex w-fit items-center gap-1 rounded-md border-2 border-white/20 bg-white/10 px-3 py-1 text-sm">
                <Timer className="mb-0.5 h-4 w-4 stroke-white" />
                <p>5min</p>
              </div>
              <div className="flex justify-end">
                <div className="relative -mr-10 -mt-6 flex h-48 w-48 items-center justify-center rounded-full bg-primaryLight/20">
                  <Image
                    src="/images/hero_1.png"
                    width={526}
                    height={438}
                    className="absolute top-2 w-28"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </TypeFormButton>
          <Link
            href="/#what"
            className="h-40 w-full overflow-clip rounded-xl bg-tertiary pl-4 pt-4 font-medium md:max-w-64"
          >
            <div className="flex items-center gap-2">
              <p className="text-white">Tell me more</p>
              <div className="flex items-center justify-center rounded-full bg-tertiaryDark p-2">
                <ArrowRight className="h-5 w-5 stroke-white" />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative -mr-10 flex h-48 w-48 items-center justify-center rounded-full bg-[#557585]">
                <Image
                  src="/images/hero_2.png"
                  width={526}
                  height={438}
                  className="absolute top-2 w-32"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <p>Certified and regulated by</p>
          <div className="flex gap-2">
            <a
              href="https://www.cqc.org.uk/provider/1-20629833868"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={164}
                height={96}
                src="/images/commissionLogo.png"
                alt="Care Quality Commission"
                className="h-12 w-auto"
              />
            </a>
            <a
              href="https://ico.org.uk/ESDWebPages/Entry/ZB808864"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={164}
                height={96}
                src="/images/icoLogo.png"
                alt="ICO Registration"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
