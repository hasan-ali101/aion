import { cn } from "@/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Nav = () => {
  const [isTop, setIsTop] = useState(true);
  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY === 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={cn(
        isTop ? "text-white" : "bg-white text-primary/80 shadow-md",
        " w-full flex justify-between px-10 md:px-16 py-4  fixed transition-all z-50 top-0 items-center duration-300"
      )}
    >
      <p className="text-2xl font-medium md:text-3xl">^ION</p>
      <div className="md:flex hidden gap-10 h-full items-center font-medium ">
        <Link href="#what">What</Link>
        <Link href="#how">How</Link>
        <Link href="#why">Why</Link>
        <Link href="#about">About</Link>
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
