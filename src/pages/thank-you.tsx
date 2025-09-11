import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/button";

const ReferralThankYou = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-8">
        <CheckCircle className="text-green-600 h-24 w-24" />
      </div>
      <h2 className="mb-3 text-2xl font-semibold">
        Thank you for submitting your referral.
      </h2>
      <p className="mb-8 text-muted-foreground max-w-md">
        Our clinical team is reviewing your submission and will be in touch shortly over email..
      </p>
      <Link href="/">
        <Button>
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default ReferralThankYou;
