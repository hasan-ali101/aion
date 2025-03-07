import Nav from "@/components/nav";
import {
  Hero,
  What,
  Where,
  Questions,
  Eligibility,
  Footer,
  Team,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative flex flex-col text-black">
      <Nav />
      <Hero />
      <What />
      <Eligibility />
      <Team />
      <Where />
      <Questions />
      <Footer />
    </div>
  );
}
