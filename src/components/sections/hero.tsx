import { ArrowRight, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CirclesAnimation from "../circles-animation";

import { cn } from "@/utils";

export const Hero = () => {
  return (
    <div className="relative text-white w-full  bg-primaryDark flex justify-center items-center">
      <CirclesAnimation />
      <div className="flex text-center flex-col gap-6 md:gap-8 w-full h-full items-center justify-center px-6 mt-24 mb-28">
        <h1 className="mx-4">Welcome to Aion Clinic</h1>
        <p className="text-lg sm:text-lg md:text-xl font-medium  max-w-[480px]">
          Ketamine-assisted Psychotherapy treatment for mental health and
          addiction
        </p>
        <div className="flex flex-col items-center justify-center md:flex-row w-full gap-4 text-left">
          <Link
            href="#what"
            className="w-full md:max-w-64 pt-4 pl-4 font-medium rounded-xl h-40 bg-primary overflow-clip"
          >
            <div className="flex gap-2 items-center">
              <p className="text-white">Start your referral</p>
              <div className="rounded-full bg-primaryDark flex justify-center items-center p-2">
                <ArrowRight className="stroke-white w-5 h-5" />
              </div>
            </div>
            <div className="flex px-3 text-sm gap-1 items-center py-1 w-fit bg-white/10 border-white/20 border-2 rounded-md">
              <Timer className="stroke-white w-4 h-4 mb-0.5" />
              <p>5min</p>
            </div>
            <div className="flex justify-end">
              <div className="rounded-full relative -mr-10 -mt-6 bg-primaryLight/20 flex justify-center items-center w-48 h-48">
                <Image
                  src="/images/hero_1.png"
                  width={526}
                  height={438}
                  className="w-28 absolute top-2"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link
            href="#what"
            className="w-full md:max-w-64 pt-4 pl-4 font-medium rounded-xl h-40 bg-tertiary overflow-clip"
          >
            <div className="flex gap-2 items-center">
              <p className="text-white">Tell me more</p>
              <div className="rounded-full bg-tertiaryDark flex justify-center items-center p-2">
                <ArrowRight className="stroke-white w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="rounded-full relative -mr-10  bg-[#557585] flex justify-center items-center w-48 h-48">
                <Image
                  src="/images/hero_2.png"
                  width={526}
                  height={438}
                  className="w-32 absolute top-2 "
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-3 flex-col items-center md:flex-row">
          <p>Certified and regulated by</p>
          <div className="flex gap-2">
            <Image
              width={164}
              height={96}
              src="/images/commissionLogo.png"
              alt=""
              className="w-full h-14"
            />
            <Image
              width={164}
              height={96}
              src="/images/icoLogo.png"
              alt=""
              className="w-full h-14"
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
