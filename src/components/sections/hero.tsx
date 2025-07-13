import { ArrowRight, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CirclesAnimation from "../circles-animation";
import { TypeFormButton } from "../type-form-button";
import { useRouter } from "next/router";

export const Hero = () => {
  const { asPath } = useRouter();

  let title = "Welcome to Aion Clinic";
  let subtitle =
    "Ketamine-assisted psychotherapy treatment for mental health and addiction";

  switch (asPath) {
    case "/anxiety":
      title = "Private Anxiety Treatment in London";
      subtitle =
        "Medication assisted psychotherapy treatment programme for anxiety";
    case "/depression":
      title = "Private Depression Treatment in London";
      subtitle =
        "Medication assisted psychotherapy treatment programme for depression";
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
            <Image
              width={164}
              height={96}
              src="/images/commissionLogo.png"
              alt=""
              className="h-12 w-auto"
            />
            <Image
              width={164}
              height={96}
              src="/images/icoLogo.png"
              alt=""
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 z-20 flex h-20 w-full flex-col items-center justify-center">
        <Image
          src="/wave-3.png"
          width="1000"
          height="100"
          alt="wave"
          className="h-10 w-full"
        />
        <div className="-mt-2 flex h-20 w-full flex-col items-center justify-center bg-muted">
          <Link href="/#what">
            <ChevronDown className="mb-6 h-10 w-10 cursor-pointer stroke-primary/80 delay-150 hover:animate-bounce sm:h-12 sm:w-12" />
          </Link>
        </div>
      </div> */}
    </div>
  );
};
