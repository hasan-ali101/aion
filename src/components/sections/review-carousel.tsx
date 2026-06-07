import { useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { testimonials } from "@/lib/data/testimonials";
import { TestimonialCard } from "../testimonial-card";

export default function AionTestimonialsHorizontal() {
  const router = useRouter();
  const isKapPage = router.pathname === "/ketamine-assisted-therapy";

  useEffect(() => {
    const existing = document.querySelector('[data-doctify-id="0zkn0raq"]');
    if (existing) existing.remove();
    const container = document.getElementById("0zkn0raq");
    if (container) container.innerHTML = "";
    const s = document.createElement("script");
    s.src = "https://www.doctify.com/get-script?widget_container_id=0zkn0raq&type=micro-star-widget&tenant=athena-uk&language=en&profileType=practice&layoutType=layoutE&slugs=aion-clinic&background=transparent";
    s.setAttribute("data-doctify-id", "0zkn0raq");
    s.async = true;
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);

  return (
    <section className="flex flex-col items-center gap-4 overflow-hidden bg-primary/95 px-4 pb-16 pt-12 text-white">
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

      <div id="0zkn0raq" className="w-full max-w-2xl rounded-md" />

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

      {!isKapPage && (
        <Link
          href="/ketamine-assisted-therapy#patient-testimonials"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
        >
          Watch Patient Journey
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
          </svg>
        </Link>
      )}
    </section>
  );
}
