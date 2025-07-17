import Head from "next/head";
import { useRouter } from "next/router";

interface HeadWrapperProps {
  /** Optional manual <title> override */
  title?: string;
  /** Optional manual <meta description> override */
  description?: string;
  /** Optional OG/Twitter image */
  image?: string;
  children: React.ReactNode;
  /** true → adds <meta robots="noindex,nofollow"> */
  noIndex?: boolean;
}

export default function HeadWrapper({
  title,
  description,
  image,
  noIndex,
  children,
}: HeadWrapperProps) {
  const { asPath } = useRouter();

  /* ---------- automatic SEO copy by route ---------- */

  /* default = home page */
  let autoTitle = "AION Clinic | Ketamine Assisted Therapy";
  let autoDesc =
    "Delivering our transformative bespoke 8-week ketamine-assisted psychotherapy programme for those suffering from mental-health or addiction problems.";

  switch (asPath) {
    case "/depression-treatment-clinic-uk":
      autoTitle = "Private Depression Treatment Clinic in London | Aion Clinic";
      autoDesc =
        "8-week evidence-based depression programme delivered by expert clinical team of consultant psychiatrists and experienced therapists.";
      break;

    case "/anxiety-treatment-clinic-uk":
      autoTitle = "Private Anxiety Treatment Clinic in London | Aion Clinic";
      autoDesc =
        "Personalised 8-week anxiety treatment blending CBT based therapy with clinician-guided medication to deliver transformative results.";
      break;

    case "/mental-health-clinic":
      autoTitle = "Private Mental-Health Clinic in London | Aion Clinic";
      autoDesc =
        "Same-week consultant psychiatrist assessments and bespoke, evidence-based treatment plans for mood & anxiety disorders.";
      break;

    case "/science":
      autoTitle =
        "Science Behind Ketamine-Assisted Therapy | Aion Clinic Evidence Hub";
      autoDesc =
        "Take a look at the vast evidence bank of peer-reviewed research on ketamine-assisted psychotherapy, safety data and outcome statistics.";
      break;

    case "/blog":
      autoTitle = "Mental-Health Insights Blog | Aion Clinic";
      autoDesc =
        "We are on a mission to demistify psychedelic-assisted treatment options; take a look at our clinically reviewed articles on ketamine assisted therapy, depression, anxiety and many more areas.";
      break;

    case "/ketamine-assisted-therapy":
      autoTitle = "Ketamine-Assisted Therapy Programme | Aion Clinic";
      autoDesc =
        "In-depth guide to our bespoke 8-week ketamine-assisted treatment protocol: evidence, safety and what to expect at each session.";
      break;

    default:
      // keep home-page defaults
      break;
  }

  /* -------------------------------------------------- */

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
      </Head>
      {children}
    </>
  );
}
