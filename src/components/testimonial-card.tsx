import { testimonials } from "@/lib/data/testimonials";
import Image from "next/image";
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

type Testimonial = (typeof testimonials)[0];

const logoMap: Record<string, string> = {
  doctify: "/images/doctify-logo-icon.png",
  google: "/images/google-logo-icon.png",
  aion: "/images/logo-icon.png",
};

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
        <div className="relative flex h-7 w-7 items-center">
          <Image src={logoMap[platform]} alt={`${platform} logo`} fill={true} />
        </div>
      </div>
    </Card>
  );
};
