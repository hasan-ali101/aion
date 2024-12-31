import { cn } from "@/utils";

const CirclesAnimation = () => {
  return (
    <div>
      <svg
        className="w-screen h-full absolute top-0 left-0 z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 10 })
          .map((_, i) => {
            return (
              <circle
                key={i}
                r={150 + i * 120}
                cx="50%"
                cy="50%"
                className={cn(
                  (i + 1) % 2 ? "animate-rotate" : "animate-reverseRotate",
                  i < 2 && "md:hidden",
                  "fill-slate-100 stroke-slate-200 stroke-[3]"
                )}
                style={{
                  filter: "drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.2))",
                  transformBox: "fill-box",
                  transformOrigin: "50% 50%",
                }}
              />
            );
          })
          .reverse()}
      </svg>
    </div>
  );
};

export default CirclesAnimation;
