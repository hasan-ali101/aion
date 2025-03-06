import Nav from "@/components/nav";
import { Hero, What, Who, Us, Where } from "@/components/sections";

export default function Home() {
  return (
    <div className="relative flex flex-col text-black">
      <Nav />
      <Hero />
      <What />
      <Who />
      <Us />
      <Where />
    </div>
  );
}
