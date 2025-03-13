import {
  Hero,
  What,
  Where,
  Questions,
  Eligibility,
  Team,
  How,
  Programme,
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
