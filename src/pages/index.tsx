import { Montserrat } from "next/font/google";
import Image from "next/image";

import Nav from "@/components/nav";
import Hero from "@/components/hero";
import { cn } from "@/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={cn(montserrat.className, "flex flex-col relative")}>
      <Nav />
      <Hero />
      <div id="what" className="w-full min-h-[70vh] bg-muted scroll-m-4" />
      <div id="how" className="w-full min-h-[70vh] bg-beige">
        <Image
          src="/wave-4.png"
          width="1000"
          height="100"
          alt="wave"
          className="h-10 w-full -mt-10"
        />
      </div>
      <div id="why" className="w-full min-h-[70vh] bg-primary/80 scroll-m-4" />
      <div id="about" className="w-full min-h-[70vh] bg-muted "></div>
    </div>
  );
}
