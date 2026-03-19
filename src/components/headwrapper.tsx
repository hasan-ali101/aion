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
  let autoTitle = "Aion Clinic | Ketamine-Assisted Therapy";
  let autoDesc =
    "Delivering our transformative bespoke 8-week ketamine-assisted psychotherapy programme for those suffering from mental-health or addiction problems.";

  switch (condition) {
    case "therapy-programme-uk":
      autoTitle = "Private Ketamine Assisted Therapy For Anxiety in London | Aion Clinic";
      autoDesc =
        "8-week evidence-based therapy programme delivered by expert clinical team of consultant psychiatrists and experienced therapists.";
      break;

    case "treatment-clinic-uk":
      autoTitle = "Private Ketamine Treatment For Depression in London | Aion Clinic";
      autoDesc =
        "Same-week consultant psychiatrist assessments and personalised ketamine-assisted therapy programmes at our CQC-registered clinic in Islington, London.";
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