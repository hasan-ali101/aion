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
} from "@/components/sections";
import AionTestimonialsHorizontal from "@/components/sections/review-carousel";
import HeadWrapper from "@/components/headwrapper";

export default function Home() {
  return (
    <HeadWrapper>
      <div className="relative flex flex-col overflow-clip text-black md:items-center">
        <Hero />
        <AionTestimonialsHorizontal />
        <What />
        <Eligibility />
        <How />
        <Programme />
        {/* <PatientTestimonials /> */}
        <Team />
        <Where />
        <Questions />
      </div>
    </HeadWrapper>
  );
}
