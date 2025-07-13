import Image from "next/image";
import { useRouter } from "next/router";

import CardCollapsible from "@/components/card-collapsible";

type Condition = { name: string; imageUrl: string };

export const Eligibility = () => {
  const { pathname } = useRouter();
  let cardTile_1 = "Clinical diagnosis of one of listed conditions";
  let cardContent_1 =
    "Currently, ketamine can be prescribed in the UK 'off-label' to treat mental health and addiction disorders.";
  let cardTile_2 = "Tried more than one form of treatment for it";
  let cardContent_2 =
    "This could be anti-depressant or anxiety medication, therapy or rehabilitation, depending on your condition.";
  let cardTitle_3 = "Low neurological or physical risk";
  let cardContent_3 =
    "We check for neurological and physical risk factors and assess potential safety or impact before proceeding.";

  switch (pathname) {
    case "/anxiety":
      cardTile_1 = "Clinical diagnosis of anxiety";
      cardContent_1 =
        "We require a formal clinical diagnosis of anxiety (or any of the other conditions listed).";
      cardTile_2 = "Tried anti-anxiety medication and / or talking therapy";
      cardContent_2 =
        "This could be medication like sertraline, diazepam or propanalol, or talking therapy with trained therapists.";
      break;
    case "/depression":
      cardTile_1 = "Clinical diagnosis of depression";
      cardContent_1 =
        "We require a formal clinical diagnosis of depression (or any of the other conditions listed).";
      cardTile_2 = "Tried antidepressants and / or talking therapy";
      cardContent_2 =
        "This could be medication like sertraline or citalopram, or talking therapy with trained therapists.";
      break;
  }

  const conditions = [
    { name: "Anxiety", imageUrl: "/images/conditions/anxiety.png" },
    { name: "Depression", imageUrl: "/images/conditions/depression.png" },
    { name: "PTSD", imageUrl: "/images/conditions/ptsd.png" },
    {
      name: "Eating Disorder",
      imageUrl: "/images/conditions/eating-disorder.png",
    },
    {
      name: "Alcohol Use Disorder",
      imageUrl: "/images/conditions/alcohol-abuse.png",
    },
    {
      name: "Substance Disorder",
      imageUrl: "/images/conditions/substance-abuse.png",
    },
  ];

  return (
    <div className="flex w-full justify-center bg-white">
      <div
        id="who"
        className="flex h-full w-full max-w-section scroll-mt-24 flex-col gap-8 bg-secondary px-6 py-20 lg:mx-6 lg:rounded-lg lg:p-12"
      >
        <h1 className="text-center text-3xl lg:text-left">
          Eligibility:{" "}
          <span className="block text-primary lg:inline">Who is this for?</span>
        </h1>
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-6">
          <div className="flex w-full flex-col items-center gap-y-4 font-medium lg:w-6/12 lg:items-start">
            <p className="max-w-[500px] text-center lg:max-w-max lg:text-left">
              We treat those most in need - in order to qualify you must have:
            </p>
            <CardCollapsible
              title={cardTile_1}
              content={cardContent_1}
              className="hidden max-w-[550px] lg:block"
              open={true}
            />
            <CardCollapsible
              title={cardTile_1}
              content={cardContent_1}
              className="max-w-[500px] lg:hidden"
            />
            <CardCollapsible
              title={cardTile_2}
              content={cardContent_2}
              className="hidden max-w-[550px] lg:block"
              open={true}
            />
            <CardCollapsible
              title={cardTitle_3}
              content={cardContent_3}
              className="hidden max-w-[550px] lg:block"
              open={true}
            />
          </div>
          <div
            id="conditions"
            className="flex w-full flex-col items-center gap-6 lg:w-6/12"
          >
            <div className="grid w-fit grid-cols-12 gap-x-2 gap-y-5 lg:mt-16 lg:gap-x-4">
              {conditions.map((condition: Condition, index: number) => (
                <div
                  key={index}
                  className="col-span-4 flex flex-col items-center gap-y-2"
                >
                  <div className="rounded-full bg-primary/5 p-1.5 lg:p-2">
                    <Image
                      src={condition.imageUrl}
                      alt={condition.name}
                      width={164}
                      height={164}
                      className="w-24 rounded-full bg-white p-3 lg:w-28 lg:min-w-28 lg:p-4"
                    />
                  </div>
                  <p className="text-center text-sm font-medium">
                    {condition.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex max-w-[500px] flex-col gap-4 lg:hidden">
            <CardCollapsible title={cardTile_2} content={cardContent_2} />
            <CardCollapsible title={cardTitle_3} content={cardContent_3} />
          </div>
        </div>
      </div>
    </div>
  );
};
