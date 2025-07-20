import {
  Hero,
  What,
  Where,
  Questions,
  Eligibility,
  Team,
  How,
  Programme,
  Why,
} from "@/components/sections";
import HeadWrapper from "@/components/headwrapper";
import { GetServerSideProps } from "next";

const conditions = [
  "anxiety-treatment-clinic-uk",
  "depression-treatment-clinic-uk",
  "mental-health-clinic",
  "ptsd",
  "eating-disorder",
  "alcohol-abuse",
  "substance-abuse",
] as const;

export type Condition = (typeof conditions)[number];

export default function Home() {
  return (
    <HeadWrapper>
      <div className="relative flex flex-col text-black md:items-center">
        <Hero />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const condition = context.query["condition"] as Condition;

  if (!conditions.includes(condition)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      condition,
    },
  };
};
