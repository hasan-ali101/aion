import Head from "next/head";

interface HeadWrapperProps {
  title?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
  noIndex?: boolean;
}

const HeadWrapper = ({
  title,
  description,
  children,
  noIndex,
}: HeadWrapperProps) => {
  return (
    <>
      <Head>
        <title>{title || "AION Clinic | Ketamine Assisted Therapy"}</title>
        <meta
          name="description"
          content={
            description ||
            "We deliver our transformative 8-week ketamine assisted psychotherapy programme for those suffering from mental health or addiction problems."
          }
        />
        {(noIndex && <meta name="robots" content="noindex,nofollow" />) || (
          <meta name="robots" content="index, follow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default HeadWrapper;
