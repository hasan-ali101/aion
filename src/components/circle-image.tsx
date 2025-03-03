import { cn } from "@/utils";
import Image from "next/image";

type CircleImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};

const CircleImage = ({ src, width, height, alt, className }: CircleImage) => {
  return (
    <div className="flex w-fit items-center justify-center rounded-full bg-primary/10 p-1">
      <div className="flex w-fit items-center justify-center rounded-full bg-primary/10 p-1">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={cn(className, "rounded-full")}
        />
      </div>
    </div>
  );
};

export default CircleImage;
