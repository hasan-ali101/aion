import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CirclesAnimation from "./circles-animation";

const Hero = () => {
  return (
    <div className="relative text-white w-full h-[100lvh]">
      <CirclesAnimation />
      <div className="flex absolute z-10  w-full h-full overflow-clip flex-col justify-between items-center bg-primary/80">
        <div className="flex text-center flex-col gap-6 md:gap-8 w-full h-full items-center justify-center px-12 ">
          <h1 className="text-3xl md:text-5xl tracking-[0.1em]">
            Welcome to AION
          </h1>
          <p className="text-xl md:text-3xl mb-4 tracking-[0.2em]">
            Ketamine-assisted Pschotherapy{" "}
          </p>
          <div className="flex md:flex-row flex-col-reverse gap-4 justify-center text-sm md:text-base mb-4">
            <Link href="#what">
              <button className="px-6 py-3 border rounded-md hover:bg-white/5 font-semibold ">
                Learn more
              </button>
            </Link>
            <button className="px-6 py-3 border rounded-md bg-white text-primary/80 hover:bg-white/90 font-semibold">
              Get Started
            </button>
          </div>
          <p className="text-base md:text-lg mb-4 tracking-[0.3em]">
            A new solution to breaking old habits
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-20 flex flex-col justify-center items-center -mt-10">
          <Image
            src="/wave-3.png"
            width="1000"
            height="100"
            alt="wave"
            className="h-10 w-full"
          />
          <div className="w-full h-20 bg-muted flex flex-col justify-center items-center">
            <Link href="#what">
              <ChevronDown className="cursor-pointer mb-6 stroke-primary/80 sm:w-12 sm:h-12 w-10 h-10 hover:animate-bounce delay-150" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
