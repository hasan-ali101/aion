import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import What from "@/components/sections/what";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Nav />
      <Hero />
      <What />

      <div id="what" className="w-full min-h-[70vh] bg-beige">
        {/* <Image
          src="/wave-4.png"
          width="1000"
          height="100"
          alt="wave"
          className="h-10 w-full -mt-10"
        /> */}
      </div>
      <div id="who" className="w-full min-h-[70vh] bg-primary/80 scroll-m-4" />
      <div id="how" className="w-full min-h-[70vh] bg-muted "></div>
      <div id="where" className="w-full min-h-[70vh] bg-muted "></div>
      <div id="us" className="w-full min-h-[70vh] bg-muted "></div>
    </div>
  );
}
