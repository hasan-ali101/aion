import { motion } from "motion/react";

import { testimonials } from "@/lib/data/testimonials";
import { TestimonialCard } from "../testimonial-card";

export default function AionTestimonialsHorizontal() {
  return (
    <section className="flex flex-col items-center gap-12 overflow-hidden bg-primary/95 px-4 pb-16 pt-12 text-white">
      <h2 className="text-center text-3xl font-semibold">
        Real Results for Real People
      </h2>
      {/* <div className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-white px-[18px] py-2">
        <div className="flex gap-px">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-4 fill-primary" />
          ))}
        </div>
        <span className="text-xs font-semibold text-primary">
          Rated 5 stars by 100% of patients
        </span>
      </div> */}

      <div className="relative flex w-full overflow-x-hidden pb-4">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: testimonials.length * 10, // Adjust for speed
            repeat: Infinity,
          }}
        >
          {/* Render the reviews twice for the infinite loop */}
          {[...testimonials, ...testimonials].map((review, i) => (
            <TestimonialCard key={i} testimonial={review} />
          ))}
        </motion.div>
      </div>

      {/* <div className="mt-[52px] px-6 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 font-['Montserrat',sans-serif] text-[13px] font-medium tracking-[0.02em] text-white/70 no-underline transition-colors hover:border-white/70 hover:text-white"
        >
          Watch full testimonials
          <ArrowDown className="size-3 stroke-white/50" />
        </a>
      </div> */}
    </section>
  );
}
