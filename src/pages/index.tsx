import Nav from "@/components/nav";
import { Hero, What, Who } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Nav />
      <Hero />
      <What />
      <Who />
      <div id="how" className="w-full min-h-dvh bg-white "></div>
      <div id="where" className="w-full min-h-dvh bg-white "></div>
      <div id="us" className="w-full min-h-dvh bg-white "></div>
    </div>
  );
}
