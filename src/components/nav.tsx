import { Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
import { GetStartedButton } from "./get-started-button";
import { PageLinks } from "./page-links";

const Nav = () => {
  const [isTop, setIsTop] = useState(true);
  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY <= 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={cn(
        isTop ? "text-white" : "bg-white text-primary/80 shadow-md",
        "fixed top-0 z-50 flex w-full items-center justify-between gap-6 px-6 py-4 transition-all duration-200 md:px-16 md:py-6",
      )}
    >
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <div className="flex flex-col items-center gap-6">
              <Image
                src="/images/logo_white.png"
                className="mb-6 w-20 md:w-24"
                width={488}
                height={192}
                alt="logo"
              />
              <PageLinks
                className="flex flex-col gap-6 text-lg font-medium"
                sidebar={true}
              />
              <GetStartedButton variant="inverted" />{" "}
            </div>
          </SheetContent>
        </Sheet>
        {isTop ? (
          <Image
            src="/images/logo_white.png"
            className="w-20 md:w-24"
            width={488}
            height={192}
            alt="logo"
          />
        ) : (
          <Image
            src="/images/logo_primary.png"
            className="w-20 md:w-24"
            width={488}
            height={192}
            alt="logo"
          />
        )}
      </div>
      <PageLinks className="hidden md:flex" />
      <GetStartedButton variant="inverted" />
    </div>
  );
};

export default Nav;
