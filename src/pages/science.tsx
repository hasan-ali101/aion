import HeadWrapper from "@/components/headwrapper";
import { Science, HowKetamineWorks } from "@/components/sections";

const Page = () => {
  return (
    <HeadWrapper>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-start gap-2 bg-primary px-6 pb-16 pt-28">
          <Science />
        </div>
        <HowKetamineWorks onSciencePage />
      </div>
    </HeadWrapper>
  );
};
export default Page;
