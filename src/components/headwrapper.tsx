import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface HeadWrapperProps {
  title?: string;
  description?: string;
  image?: string;
  children: ReactNode;
  noIndex?: boolean;
}

export default function HeadWrapper({
  title,
  description,
  image,
  noIndex,
  children,
}: HeadWrapperProps) {
  const router = useRouter();
  const { condition } = router.query;

  // --------- Auto SEO by route ---------
  let autoTitle = "Private Mental-Health Clinic & Assessment in London | Aion Clinic";
  let autoDesc =
    "Same-week consultant psychiatrist assessments and personalised medication assisted therapy programmes at our CQC-registered clinic in Islington, London.";

  switch (condition) {
    case "treatment-clinic-uk":
      autoTitle = "Private Depression Treatment Clinic in London | Aion Clinic";
      autoDesc =
        "8-week evidence-based depression programme delivered by expert clinical team of consultant psychiatrists and experienced therapists.";
      break;

    case "therapy-programme":
      autoTitle = "Private Anxiety Therapy Clinic in London | Aion Clinic";
      autoDesc =
        "Personalised 8-week anxiety treatment blending ACT therapy with clinician-guided medication to deliver transformative results.";
      break;

    case "mental-health-clinic":
      autoTitle =
        "AION Clinic | Medication Assisted Therapy";
      autoDesc =
        "Delivering our transformative bespoke 8-week medication-assisted psychotherapy programme for those suffering from mental-health or addiction problems.";
      break;

    default:
      break;
  }
  // -------------------------------------

  const metaTitle = title || autoTitle;
  const metaDesc = description || autoDesc;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        {image && <meta property="og:image" content={image} />}
        <meta
          name="robots"
          content={noIndex ? "noindex,nofollow" : "index,follow"}
        />
        {/* No GTM here — it's centralized in _document.tsx */}
        {/* No Meta Pixel here — handled in Browser GTM */}
      </Head>
      {children}
    </>
  );
}
