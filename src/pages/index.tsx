import Nav from "@/components/nav";
import {
  Hero,
  What,
  Where,
  Questions,
  Eligibility,
  Footer,
  Team,
  How,
  Programme,
  Science,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative flex flex-col text-black">
      <Hero />
      <What />
      <Eligibility />
      <How />
      <Programme />
      <Team />
      <Where />
      <Questions />
    </div>
  );
}
