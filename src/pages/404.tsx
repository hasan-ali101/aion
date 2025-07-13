import { Button } from "@/components/button";
import { ArrowRight, SearchX } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-8">
        <SearchX className="text-muted-foreground h-24 w-24" />
      </div>
      <h2 className="mb-3">Hmm, we couldn&apos;t find that page</h2>
      <p className="text-muted-foregroun mb-8">
        Sorry about that! But we can help you find your way home.
      </p>
      <Link href="/">
        <Button className="">
          Take me home <ArrowRight className="w-4" />{" "}
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
