import { cn } from "@/utils";
import Image from "next/image";
const CirclesAnimation = () => {
  return (
    <div className="w-screen overflow-hidden select-none pointer-events-none h-svh absolute left-0 top-0 opacity-10 z-10 flex justify-center items-center">
      {Array.from({ length: 11 })
        .map((_, i) => {
          return (
            <Image
              key={i}
              className={cn(
                i % 2 === 0 ? "animate-rotate" : "animate-reverseRotate",
                i < 5 && "lg:hidden",
                i < 4 && "md:hidden",
                i < 3 && "sm:hidden",
                `absolute z-[-${i}]`
              )}
              style={{
                width: `${140 + i * 150}px`,
                height: `${140 + i * 150}px`,
                minWidth: `${140 + i * 150}px`,
                minHeight: `${140 + i * 150}px`,
              }}
              src="/circle.png"
              alt="circle"
              height={1000}
              width={1000}
            />
          );
        })
        .reverse()}
    </div>
  );
};

export default CirclesAnimation;
