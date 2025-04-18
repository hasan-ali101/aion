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
import HeadWrapper from "@/components/headwrapper";

export default function Home() {
  return (
    <HeadWrapper>
      <div className="relative flex flex-col text-black md:items-center">
        <Hero />
        <What />
        <Eligibility />
        <How />
        <Programme />
        <Team />
        <Where />
        <Questions />
      </div>
    </HeadWrapper>
  );
}
