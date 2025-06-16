import Image from "next/image";

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
    { name: "Alcohol Use Disorder", imageUrl: "/images/conditions/alcohol-abuse.png" },
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
            {/* <div id="lgUp" className="hidden flex-col gap-y-6 lg:flex">
              <div className="flex max-w-[500px] flex-col gap-y-4">
                <Card className="flex w-fit items-center gap-2 bg-white px-3 py-2 font-medium">
                  <CheckCircle className="h-5 min-h-5 w-5 min-w-5 text-primary" />
                  <p>Clinical diagnosis of one of listed conditions</p>
                </Card>
                <p className="px-2">
                  Currently, ketamine can be prescribed in the UK
                  &apos;off-label&apos; to treat mental health and addiction
                  disorders.
                </p>
              </div>
              <div className="flex max-w-[500px] flex-col gap-y-4">
                <Card className="flex w-fit items-center gap-2 bg-white px-3 py-2 font-medium">
                  <CheckCircle className="h-5 min-h-5 w-5 min-w-5 text-primary" />
                  <p>Tried at least two forms of treatment for it</p>
                </Card>
                <p className="px-2">
                  This could be anti-depressant or anxiety medication, therapy
                  or rehabilitation, depending on your condition.
                </p>
              </div>
              <div className="flex max-w-[500px] flex-col gap-y-4">
                <Card className="flex w-fit items-center gap-2 bg-white px-3 py-2 font-medium">
                  <CheckCircle className="h-5 min-h-5 w-5 min-w-5 text-primary" />
                  <p>Low neurological or physical risk</p>
                </Card>
                <p className="px-2">
                  We check for neurological and physical risk factors and assess
                  potential safety or impact before proceeding.
                </p>
              </div>
            </div> */}
            <CardCollapsible
              title="Clinical diagnosis of one of listed conditions"
              content="Currently, ketamine can be prescribed in the UK 'off-label' to treat mental health and addiction disorders."
              className="hidden max-w-[550px] lg:block"
              open={true}
            />
            <CardCollapsible
              title="Clinical diagnosis of one of listed conditions"
              content="Currently, ketamine can be prescribed in the UK 'off-label' to treat mental health and addiction disorders."
              className="max-w-[500px] lg:hidden"
            />
            <CardCollapsible
              title="Tried more than two forms of treatment for it"
              content="This could be anti-depressant or anxiety medication, therapy or rehabilitation, depending on your condition."
              className="hidden max-w-[550px] lg:block"
              open={true}
            />
            <CardCollapsible
              title="Low neurological or physical risk"
              content="We check for neurological and physical risk factors and assess potential safety or impact before proceeding."
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
            <CardCollapsible
              title="Tried at least two forms of treatment for it"
              content="This could be anti-depressant or anxiety medication, therapy or rehabilitation, depending on your condition."
            />
            <CardCollapsible
              title="Low neurological or physical risk"
              content="We check for neurological and physical risk factors and assess potential safety or impact before proceeding."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
