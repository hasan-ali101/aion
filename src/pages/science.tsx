import { GetStartedButton } from "@/components/get-started-button";
import HeadWrapper from "@/components/headwrapper";
import { Science } from "@/components/sections";

const Page = () => {
  return (
    <HeadWrapper>
      <div className="flex flex-col items-center justify-start gap-2 bg-primary px-6 py-28">
        <Science />;
        <GetStartedButton variant="inverted" />
      </div>
    </HeadWrapper>
  );
};
export default Page;
