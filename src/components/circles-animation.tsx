import { cn } from "@/utils";
const CirclesAnimation = () => {
  return (
    <div>
      <svg
        className="w-screen h-full absolute top-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="8"
              dy="8"
              stdDeviation="10"
              flood-color="rgba(0, 0, 0, 0.2)"
            />
          </filter>
        </defs>

        {Array.from({ length: 6 })
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
                  filter: "url(#dropShadow)",
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
