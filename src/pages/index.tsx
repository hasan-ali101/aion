import {
  Hero,
  What,
  Where,
  Why,
  Questions,
  Eligibility,
  Team,
  How,
  Programme,
} from "@/components/sections";
import AionTestimonialsHorizontal from "@/components/sections/review-carousel";
import HeadWrapper from "@/components/headwrapper";

export default function Home() {
  return (
    <HeadWrapper>
      <div className="relative flex flex-col overflow-clip text-black md:items-center">
        <Hero />
        <AionTestimonialsHorizontal />
        <Why />
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
