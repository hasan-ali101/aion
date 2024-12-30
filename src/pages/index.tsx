import { Montserrat } from "next/font/google";
import { motion } from "motion/react";

import { cn } from "@/utils";
import { ArrowBigDown, ArrowDown, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const circles = Array.from({ length: 10 })
  .map((_, i) => {
    return (
      <circle
        key={i}
        r={120 + i * 120}
        cx="50%"
        cy="50%"
        className={cn(
          (i + 1) % 2 ? "animate-rotate" : "animate-reverseRotate",
          i < 2 && "md:hidden",
          "fill-slate-100 stroke-slate-200 stroke-2"
        )}
        style={{
          filter: "drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.3))",
          transformBox: "fill-box",
          transformOrigin: "50% 50%",
        }}
      />
    );
  })
  .reverse();

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className={`${montserrat.className} text-white relative min-h-screen h-screen min-w-screen overflow-clip flex justify-center`}
      >
        <div>
          <svg
            className="w-[2000px] h-[900px] "
            xmlns="http://www.w3.org/2000/svg"
          >
            {circles}
          </svg>
        </div>
        <div className="absolute z-50 bg-[#0E281C]/80 w-full h-screen flex flex-col justify-between items-center">
          <div className="h-20 w-full flex justify-between px-10 md:px-16 pt-6 items-center">
            <p className="text-2xl font-medium md:text-3xl">^ION</p>
            <div className="md:flex hidden gap-10 text-xl font-medium text-white">
              <Link href="#what">What</Link>
              <Link href="#how">How</Link>
              <Link href="#why">Why</Link>
              <Link href="#about">About</Link>
            </div>
            <Menu className="md:hidden" />
          </div>
          <div className="flex text-center flex-col gap-8  w-full h-full items-center justify-center px-12">
            <h1 className="text-3xl md:text-5xl tracking-[0.2em]">
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
              <button className="px-6 py-3 border rounded-md bg-white text-[#0E281C]/80 hover:bg-white/90 font-semibold">
                Get Started
              </button>
            </div>
            <p className="text-base md:text-lg mb-4 tracking-[0.3em]">
              A new solution to breaking old habits
            </p>
          </div>
          <div className="w-full h-20  flex flex-col justify-center items-center">
            <Image
              src="/wave-3.png"
              width="1000"
              height="100"
              alt="wave"
              className="h-10 w-full"
            />
            <div className="w-full h-20 bg-[#DEDCD8] flex flex-col justify-center items-center">
              <Link href="#what">
                <ChevronDown className="cursor-pointer mb-2 stroke-[#0E281C]/80 sm:w-12 sm:h-12 w-10 h-10 hover:animate-bounce delay-150" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        id="what"
        className="w-full min-h-[70vh] bg-[#DEDCD8] scroll-m-4"
      ></div>
      <div id="how" className="w-full min-h-[70vh] bg-[#F7F0E6]">
        <Image
          src="/wave-4.png"
          width="1000"
          height="100"
          alt="wave"
          className="h-10 w-full -mt-10"
        />
      </div>
      <div
        id="why"
        className="w-full min-h-[70vh] bg-[#0E281C]/80 scroll-m-4"
      />
      <div id="about" className="w-full min-h-[70vh] bg-[#DEDCD8] "></div>
    </div>
  );
}
