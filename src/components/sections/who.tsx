import Image from "next/image";
import { Card } from "../card";
import { CheckCircle } from "lucide-react";
import CardCollapsible from "../card-collapsible";

export const Who = () => {
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
        className="md: mx-6 flex h-full max-w-[1200px] scroll-mt-24 flex-col gap-6 bg-secondary px-4 py-10 md:rounded-lg md:p-6 md:px-8 lg:p-14"
      >
        <h1 className="text-center text-3xl md:text-left">
          Eligibility:{" "}
          <span className="block text-primary md:inline">Who is this for?</span>
        </h1>
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-start">
          <div className="flex w-full flex-col items-center gap-y-6 font-medium md:w-1/2 md:items-start">
            <p className="text-center text-lg md:text-left">
              We treat those most in need - in order to qualify you must have:
            </p>
            <div id="mdUp" className="hidden flex-col gap-y-6 md:flex">
              <div className="flex flex-col gap-y-4">
                <Card className="flex w-fit items-center gap-2 bg-white px-3 py-2 font-semibold">
                  <CheckCircle className="h-5 min-h-5 w-5 min-w-5 text-primary" />
                  <p>Clinical diagnosis of one of listed conditions</p>
                </Card>
                <p className="max-w-[500px] px-2">
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
                <p className="max-w-[500px] px-2">
                  This could be anti-depressant or anxiety medication, therapy
                  or rehabilitation, depending on your condition.
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <Card className="flex w-fit items-center gap-2 bg-white px-3 py-2 font-semibold">
                  <CheckCircle className="h-5 min-h-5 w-5 min-w-5 text-primary" />
                  <p>Low neurological or physical risk</p>
                </Card>
                <p className="max-w-[500px] px-2">
                  We check for neurological and physical risk factors and assess
                  potential safety or impact before proceeding.
                </p>
              </div>
            </div>
            <CardCollapsible
              title="Clinical diagnosis of one of listed conditions"
              content="Currently, ketamine can be prescribed in the UK 'off-label' to treat mental health and addiction disorders."
              className="md:hidden"
            />
          </div>
          <div id="conditions" className="flex w-full flex-col gap-6 md:w-1/2">
            <p className="font-semibold">Conditions we treat:</p>
            <div className="grid flex-1 grid-cols-12 gap-x-2 gap-y-4 md:gap-y-6">
              {conditions.map((condition: Condition, index: number) => (
                <div
                  key={index}
                  className="col-span-4 flex flex-col items-center gap-y-4"
                >
                  {" "}
                  <div className="rounded-full bg-primary/5 p-1.5 lg:p-2">
                    <div className="rounded-full bg-primary/5 p-1.5 lg:p-2">
                      <div className="relative flex w-fit items-center justify-center rounded-full bg-white p-4">
                        <Image
                          src={condition.imageUrl}
                          alt={condition.name}
                          width={164}
                          height={164}
                          className="w-20 min-w-10"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-medium">{condition.name}</p>
                </div>
              ))}
            </div>
          </div>
          <CardCollapsible
            title="Tried at least one form of treatment for it"
            content="This could be anti-depressant or anxiety medication, therapy or rehabilitation, depending on your condition."
            className="md:hidden"
          />
          <CardCollapsible
            title="Low neurological or physical risk"
            content="We check for neurological and physical risk factors and assess potential safety or impact before proceeding."
            className="md:hidden"
          />
        </div>
      </div>
    </div>
  );
};
