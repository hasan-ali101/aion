import Image from "next/image";
import { CheckCircle } from "lucide-react";

import { Card } from "@/components/card";
import CardCollapsible from "@/components/card-collapsible";

export const Eligibility = () => {
  type Condition = { name: string; imageUrl: string };

  const conditions = [
    { name: "Anxiety", imageUrl: "/images/conditions/anxiety.png" },
    { name: "Depression", imageUrl: "/images/conditions/depression.png" },
    { name: "PTSD", imageUrl: "/images/conditions/ptsd.png" },
    {
      name: "Eating Disorder",
      imageUrl: "/images/conditions/eating-disorder.png",
    },
    { name: "Alcohol abuse", imageUrl: "/images/conditions/alcohol-abuse.png" },
    {
      name: "Substance Abuse",
      imageUrl: "/images/conditions/substance-abuse.png",
    },
  ];

  return (
    <div className="flex w-full justify-center">
      <div
        id="who"
        className="flex h-full w-full max-w-section scroll-mt-24 flex-col gap-8 bg-secondary px-6 py-20 md:mx-6 md:rounded-lg md:px-8 md:py-14"
      >
        <h1 className="text-center text-3xl md:text-left">
          Eligibility:{" "}
          <span className="block text-primary md:inline">Who is this for?</span>
        </h1>
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-start md:gap-6">
          <div className="flex w-full flex-col items-center gap-y-6 font-medium md:w-7/12 md:items-start">
            <p className="max-w-[400px] text-center md:max-w-max md:text-left">
              We treat those most in need - in order to qualify you must have:
            </p>
            <div id="mdUp" className="hidden flex-col gap-y-6 md:flex">
              <div className="flex flex-col gap-y-4">
                <Card className="flex w-fit items-center gap-2 bg-white px-3 py-2 font-semibold">
                  <CheckCircle className="h-5 min-h-5 w-5 min-w-5 text-primary" />
                  <p>Clinical diagnosis of one of listed conditions</p>
                </Card>
                <p className="px-2">
                  Currently, ketamine can be prescribed in the UK
                  &apos;off-label&apos; to treat mental health and addiction
                  disorders.
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <Card className="flex w-fit items-center gap-2 bg-white px-3 py-2 font-semibold">
                  <CheckCircle className="h-5 min-h-5 w-5 min-w-5 text-primary" />
                  <p>Tried at least one form of treatment for it</p>
                </Card>
                <p className="px-2">
                  This could be anti-depressant or anxiety medication, therapy
                  or rehabilitation, depending on your condition.
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <Card className="flex w-fit items-center gap-2 bg-white px-3 py-2 font-semibold">
                  <CheckCircle className="h-5 min-h-5 w-5 min-w-5 text-primary" />
                  <p>Low neurological or physical risk</p>
                </Card>
                <p className="px-2">
                  We check for neurological and physical risk factors and assess
                  potential safety or impact before proceeding.
                </p>
              </div>
            </div>
            <CardCollapsible
              title="Clinical diagnosis of one of listed conditions"
              content="Currently, ketamine can be prescribed in the UK 'off-label' to treat mental health and addiction disorders."
              className="max-w-[400px] md:hidden"
            />
          </div>
          <div
            id="conditions"
            className="flex w-full flex-col items-center gap-6 md:w-5/12 lg:-mt-8"
          >
            <div className="grid w-fit grid-cols-12 gap-x-2 gap-y-5 md:gap-x-4 lg:gap-x-7">
              {conditions.map((condition: Condition, index: number) => (
                <div
                  key={index}
                  className="col-span-4 flex flex-col items-center gap-y-2 md:col-span-6"
                >
                  <div className="rounded-full bg-primary/5 p-1.5 lg:p-2">
                    <Image
                      src={condition.imageUrl}
                      alt={condition.name}
                      width={164}
                      height={164}
                      className="w-24 rounded-full bg-white p-3 md:p-4"
                    />
                  </div>
                  <p className="text-center text-sm font-medium">
                    {condition.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <CardCollapsible
              title="Tried at least one form of treatment for it"
              content="This could be anti-depressant or anxiety medication, therapy or rehabilitation, depending on your condition."
              className="max-w-[400px] md:hidden"
            />
            <CardCollapsible
              title="Low neurological or physical risk"
              content="We check for neurological and physical risk factors and assess potential safety or impact before proceeding."
              className="max-w-[400px] md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
