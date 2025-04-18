import { Hero, What, Where, Questions, Eligibility, Team, How, Programme } from "@/components/sections";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* SEO Title for Google Search */}
        <title>AION Clinic | Ketamine Assisted Therapy</title>

        {/* SEO Meta Description for Google Search */}
        <meta
          name="description"
          content="We deliver our transformative 8-week ketamine assisted psychotherapy programme for those suffering from mental health or addiction problems."
        />

        {/* Optional: Meta Robots tag (instructs Google to index and follow links on this page) */}
        <meta name="robots" content="index, follow" />
      </Head>

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
    </>
  );
}
