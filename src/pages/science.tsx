import { GetStartedButton } from "@/components/get-started-button";
import { Science } from "@/components/sections";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-2 bg-primary px-6 py-28">
      <Science />;
      <GetStartedButton variant="inverted" />
    </div>
  );
};
export default Page;
