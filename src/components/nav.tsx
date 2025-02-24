import { Menu } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/utils";

const Nav = () => {
  const [isTop, setIsTop] = useState(true);
  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY <= 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={cn(
        isTop ? "text-white" : "bg-white text-primary/80 shadow-md",
        " w-full flex justify-between px-10 md:px-16 py-4 md:py-6 transition-all duration-200 fixed  z-50 top-0 items-center"
      )}
    >
      <p className="text-2xl font-medium md:text-3xl">^ION</p>
      <div className="md:flex hidden gap-6 h-full items-center font-medium ">
        <Link
          className={cn(
            isTop ? "hover:bg-white/20" : "hover:bg-muted/40",
            " py-1 transition-colors px-4"
          )}
          href="#what"
        >
          What
        </Link>
        <Link
          className={cn(
            isTop ? "hover:bg-white/20" : "hover:bg-muted/40",
            " py-1 transition-colors px-4"
          )}
          href="#how"
        >
          How
        </Link>
        <Link
          className={cn(
            isTop ? "hover:bg-white/20" : "hover:bg-muted/40",
            " py-1 transition-colors px-4"
          )}
          href="#why"
        >
          Why
        </Link>
        <Link
          className={cn(
            isTop ? "hover:bg-white/20" : "hover:bg-muted/40",
            " py-1 transition-colors px-4"
          )}
          href="#about"
        >
          About
        </Link>
        <button
          className={cn(
            isTop
              ? "text-primary/80 bg-white hover:bg-white/90 "
              : "bg-primary/70 text-white hover:bg-primary/60",
            "px-2 py-1 border rounded-md  font-semibold"
          )}
        >
          Get Started
        </button>
      </div>
      <Menu className="md:hidden" />
    </div>
  );
};

export default Nav;
