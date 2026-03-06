import { testimonials } from "@/lib/data/testimonials";
import { Star } from "lucide-react";
import { Avatar } from "./avatar";
import { Card } from "./card";

const ParsedQuote = ({ text }: { text: string }) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-white">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
};

const GoogleLogo = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const DoctifyLogo = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="dg1h" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2979FF" />
        <stop offset="100%" stopColor="#00E5CC" />
      </linearGradient>
      <linearGradient id="dg2h" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00BFFF" />
        <stop offset="100%" stopColor="#00E5CC" />
      </linearGradient>
    </defs>
    <path
      d="M52 18 C52 18 58 8 66 10 C64 18 56 20 52 18Z"
      fill="url(#dg2h)"
      opacity="0.9"
    />
    <path
      d="M50 30 C50 30 28 22 22 42 C16 62 34 78 50 88 C34 74 20 60 26 42 C32 24 50 30 50 30Z"
      fill="url(#dg1h)"
    />
    <path
      d="M50 30 C50 30 72 22 78 42 C84 62 66 78 50 88 C66 74 80 60 74 42 C68 24 50 30 50 30Z"
      fill="url(#dg2h)"
      opacity="0.85"
    />
    <path
      d="M50 32 C44 40 40 52 42 64 C44 74 48 82 50 88 C52 82 56 74 58 64 C60 52 56 40 50 32Z"
      fill="url(#dg1h)"
      opacity="0.4"
    />
  </svg>
);

const AionLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="aionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7EC8A0" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
    </defs>
    <path
      d="M50 10 C50 10 20 30 20 58 C20 76 34 90 50 90 C66 90 80 76 80 58 C80 30 50 10 50 10Z"
      fill="url(#aionGrad)"
      opacity="0.9"
    />
    <path
      d="M50 22 C50 22 32 38 32 58 C32 70 40 80 50 80"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const PlatformLogo = ({ platform }: { platform: string }) => {
  if (platform === "google") return <GoogleLogo />;
  if (platform === "doctify") return <DoctifyLogo />;
  return <AionLogo />;
};

type Testimonial = (typeof testimonials)[0];

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  const { name, complaint, platform, stars, avatar, quote } = testimonial;
  return (
    <Card className="flex w-[360px] shrink-0 flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-7 pb-6 backdrop-blur-sm">
      <div className="flex gap-[3px]">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="size-4 fill-secondary stroke-none" />
        ))}
      </div>
      <p className="m-0 flex-1 text-sm leading-[1.65] text-white/80">
        <ParsedQuote text={`"${quote}"`} />
      </p>
      <div className="flex items-center justify-between border-t border-white/[0.08] pt-[18px]">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-full">
            <Avatar config={avatar} size={44} />
          </div>
          <div>
            <div className="text-[13px] font-semibold text-white">{name}</div>
            <div className="mt-0.5 text-[11px] text-white/80">{complaint}</div>
          </div>
        </div>
        <div className="flex items-center">
          <PlatformLogo platform={platform} />
        </div>
      </div>
    </Card>
  );
};
