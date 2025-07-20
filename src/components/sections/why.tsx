import { useRouter } from "next/router";

import CardCollapsible from "@/components/card-collapsible";
import { AnxietyChart } from "@/components/anxiety-chart";
import { DepressionChart } from "@/components/depression-chart";

export const Why = () => {
  const router = useRouter();
  const { condition } = router.query;

  const cardTile_1 = "Highly experienced medical team";
  const cardContent_1 =
    "Our clinical team of psychiatrists, nurses & therapists have a wealth of experience with patients under controlled substances.";
  const cardTile_2 = "Evidence-based treatment protocol";
  const cardContent_2 =
    "Our treatment is derived from years of clinical research and refined through practical experience.";
  const cardTitle_3 = "Safe, regulated expert clinical service";
  const cardContent_3 =
    "We are fully regulated and approved by the CQC to safely run our clinical practice.";

  return (
    <div className="flex w-full justify-center bg-white md:pt-10">
      <div
        id="why"
        className="flex h-full w-full max-w-section scroll-mt-24 flex-col gap-8 bg-secondary py-20 lg:mx-6 lg:rounded-lg lg:p-12"
      >
        <h1 className="text-center text-3xl lg:text-left">
          <span className="block text-primary lg:inline"> Why Choose Us?</span>
        </h1>
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-6">
          <div className="flex w-full flex-col items-center gap-y-4 px-6 font-medium lg:w-6/12 lg:items-start">
            <p className="max-w-[500px] text-center lg:max-w-max lg:text-left">
              We deliver tangible results to those where nothing else has
              worked:
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
          <div className="flex w-full flex-col items-center gap-6 lg:w-6/12">
            {condition === "anxiety-treatment-clinic-uk" ? (
              <AnxietyChart />
            ) : (
              <DepressionChart />
            )}
          </div>
          <div className="flex max-w-[500px] flex-col gap-4 px-6 lg:hidden">
            <CardCollapsible title={cardTile_2} content={cardContent_2} />
            <CardCollapsible title={cardTitle_3} content={cardContent_3} />
          </div>
        </div>
      </div>
    </div>
  );
};
