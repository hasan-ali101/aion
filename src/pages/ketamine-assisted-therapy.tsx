import {
  Hero,
  What,
  Where,
  Questions,
  Eligibility,
  Team,
  How,
  Programme,
  PatientTestimonials,
  HowKetamineWorks,
} from "@/components/sections";
import AionTestimonialsHorizontal from "@/components/sections/review-carousel";
import HeadWrapper from "@/components/headwrapper";

export default function Home() {
  return (
    <HeadWrapper>
      <div className="relative flex flex-col text-black md:items-center">
        <Hero />
        <HowKetamineWorks />
        <PatientTestimonials />
        <AionTestimonialsHorizontal />
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
