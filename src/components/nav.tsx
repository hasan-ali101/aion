import { Menu } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/sheet";
import { GetStartedButton } from "./get-started-button";

const Nav = () => {
  const [isTop, setIsTop] = useState(true);
  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY <= 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const PageLinks = ({
    className,
    sidebar,
  }: {
    className?: string;
    sidebar?: boolean;
  }) => {
    const links = [
      { href: "#what", label: "What" },
      { href: "#who", label: "Who" },
      { href: "#how", label: "How" },
      { href: "#where", label: "Where" },
      { href: "#us", label: "Us" },
    ];

    return (
      <div
        className={cn(
          "w-full justify-end gap-4 text-sm h-full items-center font-medium",
          className
        )}
      >
        {links.map(({ href, label }) =>
          sidebar ? (
            <SheetClose asChild key={href}>
              <Link
                className={cn(
                  isTop ? "hover:bg-white/20" : "hover:bg-muted/40",
                  "py-1 transition-colors px-4"
                )}
                href={href}
              >
                {label}
              </Link>
            </SheetClose>
          ) : (
            <Link
              key={href}
              className={cn(
                isTop ? "hover:bg-white/20" : "hover:bg-muted/40",
                "py-1 transition-colors px-4"
              )}
              href={href}
            >
              {label}
            </Link>
          )
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        isTop ? "text-white" : "bg-white text-primary/80 shadow-md",
        " w-full flex justify-between gap-6 px-6 md:px-16 py-4 md:py-6 transition-all duration-200 fixed  z-50 top-0 items-center"
      )}
    >
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <div className="gap-6 flex flex-col items-center">
              <Image
                src="/images/logo_white.png"
                className="w-20 md:w-24 mb-6"
                width={488}
                height={192}
                alt="logo"
              />
              <PageLinks
                className="flex flex-col text-lg font-medium gap-6"
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
