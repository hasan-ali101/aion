import { ArrowRight, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CirclesAnimation from "../circles-animation";

export const Hero = () => {
  return (
    <div className="relative flex w-full items-center justify-center bg-primaryDark text-white">
      <CirclesAnimation />
      <div className="mb-28 mt-24 flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center md:gap-8">
        <h1 className="mx-4">Welcome to Aion Clinic</h1>
        <p className="max-w-[480px] text-lg font-medium sm:text-lg md:text-xl">
          Ketamine-assisted Psychotherapy treatment for mental health and
          addiction
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-4 text-left md:flex-row">
          <Link
            href="#what"
            className="h-40 w-full overflow-clip rounded-xl bg-primary pl-4 pt-4 font-medium md:max-w-64"
          >
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
          </Link>
          <Link
            href="#what"
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
              className="w-fit"
            />
            <Image
              width={164}
              height={96}
              src="/images/icoLogo.png"
              alt=""
              className="w-fit"
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 w-full z-20 h-20 flex flex-col justify-center items-center">
        <Image
          src="/wave-3.png"
          width="1000"
          height="100"
          alt="wave"
          className="w-full h-10"
        />
        <div className="w-full h-20 bg-muted flex flex-col -mt-2 justify-center items-center">
          <Link href="#what">
            <ChevronDown className="cursor-pointer mb-6 stroke-primary/80 sm:w-12 sm:h-12 w-10 h-10 hover:animate-bounce delay-150" />
          </Link>
        </div>
      </div> */}
    </div>
  );
};
