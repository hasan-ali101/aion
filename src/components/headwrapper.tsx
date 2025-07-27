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
  const router = useRouter();
  const { condition } = router.query;

  /* ---------- automatic SEO copy by route ---------- */

  /* default = home page */
  let autoTitle = "AION Clinic | Ketamine Assisted Therapy";
  let autoDesc =
    "Delivering our transformative bespoke 8-week ketamine-assisted psychotherapy programme for those suffering from mental-health or addiction problems.";

  switch (condition) {
    case "depression-treatment-clinic-uk":
      autoTitle = "Private Depression Treatment Clinic in London | Aion Clinic";
      autoDesc =
        "8-week evidence-based depression programme delivered by expert clinical team of consultant psychiatrists and experienced therapists.";
      break;

    case "anxiety-treatment-clinic-uk":
      autoTitle = "Private Anxiety Treatment Clinic in London | Aion Clinic";
      autoDesc =
        "Personalised 8-week anxiety treatment blending CBT based therapy with clinician-guided medication to deliver transformative results.";
      break;

    case "mental-health-clinic":
      autoTitle = "Private Mental-Health Clinic in London | Aion Clinic";
      autoDesc =
        "Same-week consultant psychiatrist assessments and bespoke, evidence-based treatment plans for mood & anxiety disorders.";
      break;

    case "science":
      autoTitle =
        "Science Behind Ketamine-Assisted Therapy | Aion Clinic Evidence Hub";
      autoDesc =
        "Take a look at the vast evidence bank of peer-reviewed research on ketamine-assisted psychotherapy, safety data and outcome statistics.";
      break;

    case "blog":
      autoTitle = "Mental-Health Insights Blog | Aion Clinic";
      autoDesc =
        "We are on a mission to demistify psychedelic-assisted treatment options; take a look at our clinically reviewed articles on ketamine assisted therapy, depression, anxiety and many more areas.";
      break;

    case "ketamine-assisted-therapy":
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
        {/* ✅ Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KGDQRN8K');`,
          }}
        />

        {/* ✅ Meta Pixel (base) — add this block */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
      (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init','1436893201055174'); fbq('track','PageView');`,
          }}
        />
      </Head>
      {children}
    </>
  );
}
