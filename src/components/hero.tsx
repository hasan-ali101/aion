import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CirclesAnimation from "./circles-animation";

const Hero = () => {
  return (
    <div className="relative text-white w-full min-h-dvh bg-primary/80 flex justify-center items-center">
      <CirclesAnimation />
      <div className="flex text-center flex-col gap-6 md:gap-8 w-full h-full items-center justify-center px-12 mt-20 mb-28">
        <h1 className="text-xl font-semibold sm:text-3xl md:text-4xl tracking-[0.1em]">
          Welcome to AION
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl  tracking-[0.2em]">
          Ketamine-assisted Psychotherapy{" "}
        </p>
        <div className="flex flex-row gap-4 justify-center text-xs sm:text-sm md:text-base ">
          <Link href="#what">
            <button className="px-4 py-2 border rounded-md hover:bg-white/5 font-semibold ">
              Learn more
            </button>
          </Link>
          <button className="px-4 py-2 border rounded-md bg-white text-primary/80 hover:bg-white/90 font-semibold">
            Get Started
          </button>
        </div>
        <p className="text-sm sm:text-base md:text-lg tracking-[0.3em]">
          A new solution to breaking old habits
        </p>
      </div>
      <div className="absolute bottom-0 w-full h-20 flex flex-col justify-center items-center">
        <Image
          src="/wave-3.png"
          width="1000"
          height="100"
          alt="wave"
          className="w-full h-10"
        />
        <div className="w-full h-20 bg-muted flex flex-col justify-center items-center">
          <Link href="#what">
            <ChevronDown className="cursor-pointer mb-6 stroke-primary/80 sm:w-12 sm:h-12 w-10 h-10 hover:animate-bounce delay-150" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
