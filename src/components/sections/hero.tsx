import { useEffect, useState } from "react";
import { ArrowRight, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CirclesAnimation from "../circles-animation";
import { TypeFormButton } from "../type-form-button";
import { useRouter } from "next/router";
import { cn } from "@/utils";

export const Hero = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const { condition } = router.query;
  const pageKey = (condition as string) || router.pathname.slice(1);

  let title = "Welcome to Aion Clinic";
  let subtitle =
    "Private psychedelic-assisted therapy for treatment-resistant mental health and addiction";

  switch (pageKey) {
    case "anxiety-treatment-clinic-uk":
      title = "Private Anxiety Treatment in London";
      subtitle =
        "Discover our personalised 8-week anxiety-treatment programme delivered by expert clinicians";
      break;
    case "depression-treatment-clinic-uk":
      title = "Private Depression Treatment in London";
      subtitle =
        "Evidence-based 8-week medication-assisted programme for treatment-resistant depression";
      break;
    case "mental-health-clinic":
      title = "Private Mental Health Clinic in London";
      subtitle =
        "Medication-assisted therapy for mental health. Same-week consultant medical assessment to assess eligibility.";
      break;
    case "ketamine-assisted-therapy":
      title = "Ketamine-Assisted Therapy";
      subtitle =
        "Learn about ketamine-assisted therapy and how it can help treat mental health and addiction.";
      break;      
  }

  useEffect(() => {
    setVisible(true);
    const inject = () => {
      if (document.getElementById("doctify-hero-override")) return;
      const style = document.createElement("style");
      style.id = "doctify-hero-override";
      style.textContent = `
        [id="0zkn0raq"] a,
        [id="0zkn0raq"] a:link,
        [id="0zkn0raq"] a:visited,
        [id="0zkn0raq"] span,
        [id="0zkn0raq"] p,
        [id="0zkn0raq"] div { color: white !important; }
        [id="0zkn0raq"] [class*="stars_item"]::before,
        [id="0zkn0raq"] [class*="stars_item"]::after { filter: brightness(0) invert(1) !important; }
        [id="0zkn0raq"] i[class*="doctify_micro_stars_logo"] { filter: brightness(0) invert(1) !important; }
        [id="09a6o5fu"] a,
        [id="09a6o5fu"] a:link,
        [id="09a6o5fu"] a:visited,
        [id="09a6o5fu"] span,
        [id="09a6o5fu"] p,
        [id="09a6o5fu"] div { color: white !important; }
        [id="09a6o5fu"] [class*="stars_item"]::before,
        [id="09a6o5fu"] [class*="stars_item"]::after { filter: brightness(0) invert(1) !important; }
        [id="09a6o5fu"] i[class*="doctify_micro_stars_logo"] { filter: brightness(0) invert(1) !important; }
      `;
      document.head.appendChild(style);
    };
    inject();

    // Dynamic script load — runs on every mount so widget reinitialises on
    // client-side navigation (Next.js <Script> deduplicates by src and skips re-runs)
    const loadDoctify = (containerId: string, layoutType: string) => {
      const existing = document.querySelector(`[data-doctify-id="${containerId}"]`);
      if (existing) existing.remove();
      const container = document.getElementById(containerId);
      if (container) container.innerHTML = "";
      const s = document.createElement("script");
      s.src = `https://www.doctify.com/get-script?widget_container_id=${containerId}&type=micro-star-widget&tenant=athena-uk&language=en&profileType=practice&layoutType=${layoutType}&slugs=aion-clinic&background=transparent`;
      s.setAttribute("data-doctify-id", containerId);
      s.async = true;
      document.body.appendChild(s);
      return s;
    };

    const heroScript = loadDoctify("09a6o5fu", "layoutH");
    return () => { heroScript.remove(); };
  }, []);

  return (
    <section className="relative flex h-fit w-full items-center justify-center bg-gradient-to-b from-primaryDark to-primaryDark/85 text-white">
      <CirclesAnimation />
      <div
        className={cn(
          visible ? "translate-y-0" : "-translate-y-5 opacity-0",
          "mb-16 mt-28 flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center transition-all duration-1000 ease-out md:gap-8",
        )}
      >
        <h1 className="mx-4 max-w-[700px]">{title}</h1>
        <p className="max-w-[480px] text-lg font-medium sm:text-lg md:text-xl">
          {subtitle}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-4 text-left md:flex-row md:gap-6">
          <TypeFormButton className="h-40 w-full overflow-clip rounded-xl border border-white/20 bg-primary pl-4 pt-4 font-medium shadow-lg md:h-52 md:max-w-80">
            <div className="flex items-center gap-2">
              <p className="text-white">Start your referral</p>
              <div className="flex items-center justify-center rounded-full bg-primaryDark p-2">
                <ArrowRight className="h-5 w-5 stroke-white" />
              </div>
            </div>
            <div className="flex w-fit items-center gap-1 rounded-md border-2 border-white/20 bg-white/10 px-3 py-1 text-sm">
              <Timer className="mb-0.5 h-4 w-4 stroke-white" />
              <p>5min</p>
            </div>
            <div className="flex justify-end">
              <div className="relative -mr-10 -mt-6 flex h-48 w-48 items-center justify-center rounded-full bg-primaryLight/20">
                <Image
                  src="/images/hero_1.png"
                  width={526}
                  height={438}
                  className="absolute top-2 w-28 md:top-10 md:w-32"
                  alt=""
                />
              </div>
            </div>
          </TypeFormButton>
          <Link
            href="/ketamine-assisted-therapy#what"
            className="relative h-40 w-full overflow-clip rounded-xl border border-white/20 bg-tertiary pl-4 pt-4 font-medium shadow-lg md:h-52 md:max-w-80"
          >
            <div className="flex items-center gap-2">
              <p className="text-white">Tell me more</p>
              <div className="flex items-center justify-center rounded-full bg-tertiaryDark p-2">
                <ArrowRight className="h-5 w-5 stroke-white" />
              </div>
            </div>
            <div
              className="mt-2 flex w-fit overflow-hidden rounded-md border-2 border-white/20 bg-white/10"
              style={{ zoom: 0.55 }}
            >
              <div id="09a6o5fu" className="[&_a]:!bg-transparent [&_a]:!p-1" />
            </div>
            <div className="absolute -bottom-5 right-0 flex justify-end">
              <div className="relative -mr-10 mt-16 flex h-48 w-48 items-center justify-center rounded-full bg-[#557585]">
                <Image
                  src="/images/hero_2.png"
                  width={526}
                  height={438}
                  className="absolute top-2 w-32 md:top-14 md:w-32"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <p className="text-sm text-white/80">Certified and regulated by</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.cqc.org.uk/provider/1-20629833868"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={164}
                  height={96}
                  src="/images/commissionLogo.png"
                  alt="Care Quality Commission"
                  className="h-10 w-auto brightness-0 invert"
                />
              </a>
              <a
                href="https://ico.org.uk/ESDWebPages/Entry/ZB808864"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={164}
                  height={96}
                  src="/images/icoLogo.png"
                  alt="ICO Registration"
                  className="h-10 w-auto brightness-0 invert"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-3">
            <p className="text-sm text-white/80">Registered with</p>
            <div className="flex items-center gap-2">
              <Image
                width={120}
                height={40}
                src="/images/BUPA logo.png"
                alt="BUPA"
                className="h-6 w-24 object-contain brightness-0 invert"
              />
              <Image
                width={120}
                height={40}
                src="/images/vitality-logo-og-removebg-preview.png"
                alt="Vitality"
                className="h-14 w-36 object-contain brightness-0 invert"
              />
              <Image
                width={120}
                height={40}
                src="/images/cigna logo.png"
                alt="Cigna"
                className="h-6 w-24 object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
