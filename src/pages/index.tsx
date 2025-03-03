import Nav from "@/components/nav";
import { Hero, What, Who } from "@/components/sections";

export default function Home() {
  return (
    <div className="relative flex flex-col text-black">
      <Nav />
      <Hero />
      <What />
      <Who />
      <div id="how" className="min-h-dvh w-full bg-white"></div>
      <div id="where" className="min-h-dvh w-full bg-white"></div>
      <div id="us" className="min-h-dvh w-full bg-white"></div>
    </div>
  );
}
