import Image from "next/image";
import { Card } from "../card";
import { CheckCircle, ChevronDown } from "lucide-react";
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
    <div
      id="who"
      className="flex flex-col gap-6 h-full scroll-m-24 py-10 md:px-8 px-4  bg-secondary  md:m-6 lg:m-10 md:rounded-lg"
    >
      <h1 className="text-3xl text-center md:text-left">
        Eligibility:{" "}
        <span className="text-primary block md:inline">Who is this for?</span>
      </h1>
      <div className="flex md:items-start flex-col md:flex-row w-full gap-6">
        <div className="md:w-1/2 font-medium items-center md:items-start w-full flex flex-col gap-y-6">
          <p className="text-lg text-center md:text-left">
            We treat those most in need - in order to qualify you must have:
          </p>
          <div id="mdUp" className="flex-col gap-y-6 hidden md:flex">
            <div className="gap-y-4 flex flex-col">
              <Card className="bg-white font-semibold flex w-fit items-center gap-2 px-3 py-2">
                <CheckCircle className="text-primary w-5 h-5 min-w-5 min-h-5" />
                <p>Clinical diagnosis of one of listed conditions</p>
              </Card>
              <p className="px-2 max-w-[500px]">
                Currently, ketamine can be prescribed in the UK 'off-label' to
                treat mental health and addiction disorders.
              </p>
            </div>
            <div className="gap-y-4 flex flex-col">
              <Card className="bg-white font-semibold flex w-fit items-center gap-2 px-3 py-2">
                <CheckCircle className="text-primary w-5 h-5 min-w-5 min-h-5" />
                <p>Tried at least one form of treatment for it</p>
              </Card>
              <p className="px-2 max-w-[500px]">
                This could be anti-depressant or anxiety medication, therapy or
                rehabilitation, depending on your condition.
              </p>
            </div>
            <div className="gap-y-4 flex flex-col">
              <Card className="bg-white font-semibold flex w-fit items-center gap-2 px-3 py-2">
                <CheckCircle className="text-primary min-w-5 min-h-5 w-5 h-5" />
                <p>Low neurological or physical risk</p>
              </Card>
              <p className="px-2 max-w-[500px]">
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
        <div id="conditions" className="flex md:w-1/2 w-full flex-col gap-6">
          <p className="font-semibold">Conditions we treat:</p>
          <div className="grid grid-cols-12 gap-y-4 md:gap-y-6 gap-x-2 flex-1">
            {conditions.map((condition: Condition, index: number) => (
              <div
                key={index}
                className="col-span-4 flex gap-y-4 flex-col items-center"
              >
                {" "}
                <div className="bg-primary/5 p-1.5 lg:p-2 rounded-full">
                  <div className="bg-primary/5 p-1.5 lg:p-2 rounded-full">
                    <div className="relative bg-white rounded-full w-fit flex justify-center items-center p-4">
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
  );
};
