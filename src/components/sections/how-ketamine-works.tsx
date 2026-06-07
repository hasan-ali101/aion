import { useState } from "react";
import Link from "next/link";
import CardCollapsible from "@/components/card-collapsible";
import { TypeFormButton } from "@/components/type-form-button";
import { FadeIn } from "../fade-in";

// ── Replace with a real YouTube video ID when ready ──────────────────────────
const VIDEO_ID = "qMr9IuW67GA";

const VideoEmbed = () => {
  const [playing, setPlaying] = useState(false);

  if (VIDEO_ID && playing) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: "16/9" }}
      >
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="How ketamine works"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  if (VIDEO_ID) {
    return (
      <button
        onClick={() => setPlaying(true)}
        className="group relative w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: "16/9" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
          alt="How ketamine works"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 bg-white/15 backdrop-blur-sm transition group-hover:scale-110 group-hover:border-white">
            <svg className="ml-1 h-7 w-7 fill-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
    );
  }

  /* ── Placeholder shown until a video ID is supplied ── */
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl bg-primaryDark/90"
      style={{ aspectRatio: "16/9" }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
        <svg className="ml-1 h-7 w-7 fill-white/70" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="text-sm font-medium text-white/50">Video coming soon</p>
    </div>
  );
};

export const HowKetamineWorks = ({ onSciencePage = false }: { onSciencePage?: boolean }) => {
  return (
    <FadeIn>
      <div
        id="how-ketamine-works"
        className="flex w-full scroll-mt-24 flex-col gap-8 bg-secondary px-6 pb-12 pt-10 lg:px-12"
      >
          <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-10">
            {/* ── Left column ───────────────────────────────────────────── */}
            <div className="flex w-full flex-col items-center gap-y-4 px-6 font-medium lg:w-6/12 lg:items-start">
              <h2 className="w-full text-center text-3xl font-semibold lg:text-left">
                How <span className="text-primary">ketamine works</span>
              </h2>
              <p className="max-w-[500px] text-center lg:max-w-max lg:text-left">
                Ketamine treatment can help those with treatment-resistant
                mental health and addiction:
              </p>

              {/* Mobile-only: video above cards */}
              <div className="w-full lg:hidden">
                <VideoEmbed />
              </div>

              {/* Desktop — always open (pointer events disabled by CardCollapsible on lg+) */}
              <CardCollapsible
                title="Acts on a different pathway to antidepressants"
                content="Ketamine blocks NMDA receptors in the brain (glutamate pathway), rather than targeting serotonin like traditional antidepressants."
                className="hidden lg:block"
                open={true}
              />
              <CardCollapsible
                title="Rapid antidepressant effects"
                content="Unlike traditional antidepressants which can take weeks or months to have effect, ketamine can produce significant relief within hours."
                className="hidden lg:block"
                open={true}
              />
              <CardCollapsible
                title="Promotes neuroplasticity and synaptic growth"
                content="Ketamine stimulates the growth of new synaptic connections, helping the brain be more conducive and form new, long-term healthier patterns."
                className="hidden lg:block"
                open={true}
              />

              {/* Mobile — closed by default, tap to expand */}
              <CardCollapsible
                title="Acts on a different pathway to antidepressants"
                content="Ketamine blocks NMDA receptors in the brain (glutamate pathway), rather than targeting serotonin like traditional antidepressants."
                className="lg:hidden"
              />
              <CardCollapsible
                title="Rapid antidepressant effects"
                content="Unlike traditional antidepressants which can take weeks or months to have effect, ketamine can produce significant relief within hours."
                className="lg:hidden"
              />
              <CardCollapsible
                title="Promotes neuroplasticity and synaptic growth"
                content="Ketamine stimulates the growth of new synaptic connections, helping the brain be more conducive and form new, long-term healthier patterns."
                className="lg:hidden"
              />

              {/* Mobile-only: CTA below cards */}
              <div className="flex w-full justify-center lg:hidden">
                {onSciencePage ? (
                  <TypeFormButton className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-primaryDark">
                    Start my referral
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </TypeFormButton>
                ) : (
                  <Link
                    href="/science"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primaryDark"
                  >
                    Learn more on our science page
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>

            {/* ── Right column: video + CTA (desktop only, self-centred) ── */}
            <div className="hidden w-full flex-col items-center justify-center gap-5 pt-10 lg:flex lg:w-6/12">
              <VideoEmbed />
              {onSciencePage ? (
                  <TypeFormButton className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-primaryDark">
                    Start my referral
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </TypeFormButton>
              ) : (
                <Link
                  href="/science"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primaryDark"
                >
                  Learn more on our science page
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
    </FadeIn>
  );
};
