// pages/privacy-policy.tsx
import Link from "next/link";
import { Button } from "@/components/button";

const LAST_UPDATED = "1 Oct 2025";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "sharing", label: "4. Sharing Your Information" },
  { id: "security", label: "5. Data Protection and Security" },
  { id: "cookies", label: "6. Cookies and Advertising" },
  { id: "rights", label: "7. Your Rights" },
  { id: "contact", label: "8. Contact Us" },
  { id: "updates", label: "9. Updates to This Policy" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        
        {/* Sticky TOC (desktop) */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-2 rounded-2xl border bg-white p-4 shadow-sm">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
              On this page
            </p>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-md px-2 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main */}
        <main className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="prose prose-neutral max-w-none p-6 md:p-10">
            
            {/* Title & last updated inside card */}
            <h1 className="mb-1 text-3xl font-semibold tracking-tight">Privacy Policy</h1>
            <p className="mb-8 text-sm text-neutral-500">Last updated: {LAST_UPDATED}</p>
            
            <h2 id="introduction" className="mt-10 mb-4 scroll-mt-24">1. Introduction</h2>
            <p>
              Aion Clinic (“we”, “our”, “us”) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and protect your personal
              data when you visit our website (<span className="whitespace-nowrap">aion-clinic.com</span>),
              interact with our online advertising, or share information with us through our referral process.
            </p>
            <p>
              We are registered with the Information Commissioner’s Office (ICO) under
              registration number <strong>ZB808864</strong>. View our entry:&nbsp;
              <a
                href="https://ico.org.uk/ESDWebPages/Entry/ZB808864"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ico.org.uk/ESDWebPages/Entry/ZB808864
              </a>.
            </p>

            <h2 id="information-we-collect" className="mt-10 mb-4 scroll-mt-24">2. Information We Collect</h2>
            <p>
              <strong>2.1 Marketing Data</strong> – We collect data from our website and advertising
              campaigns (including Facebook and Instagram) to help us understand how people use our
              services and to improve user experience.
            </p>
            <p>
              <strong>2.2 Referral Data</strong> – When you submit our referral form, we safely store any
              personal information you provide, including contact details and health information
              relevant to your enquiry.
            </p>

            <h2 id="how-we-use" className="mt-10 mb-4 scroll-mt-24">3. How We Use Your Information</h2>
            <p>
              <strong>3.1 Marketing data</strong> is used to analyse and improve our website and services
              and to measure the effectiveness of our advertising campaigns. The lawful basis for this
              processing is <strong>legitimate interests</strong>.            </p>
            <p>
                <strong>3.2 Referral data</strong> is used to progress your referral, assess eligibility for
                treatment, deliver our healthcare services, and meet legal and regulatory requirements. The
                lawful basis is <strong>explicit consent</strong> and, where health data is involved,
                Article 9(2)(h) UK GDPR (provision of healthcare).            </p>

            <h2 id="sharing" className="mt-10 mb-4 scroll-mt-24">4. Sharing Your Information</h2>
            <p>4.1 We will never sell your personal data.</p>
            <p>
              4.2 We may share information only with: (a) healthcare professionals directly involved
              in your care; (b) regulators where required by law; and (c) trusted third-party
              providers (such as Cliniko, HubSpot, and Google) who support our operations under
              strict confidentiality and data protection agreements.
            </p>

            <h2 id="security" className="mt-10 mb-4 scroll-mt-24">5. Data Protection and Security</h2>
            <p>
              5.1 All personal data is stored securely and only kept for as long as necessary to
              deliver our services and meet legal obligations.
            </p>
            <p>
              5.2 We use appropriate technical and organisational safeguards to protect your data
              against loss, misuse, or unauthorised access.
            </p>

            <h2 id="cookies" className="mt-10 mb-4 scroll-mt-24">6. Cookies and Advertising</h2>
            <p>
              6.1 Our website may use cookies, Google Analytics, and Meta advertising tools (such as
              the Facebook Pixel) to understand usage and improve performance. You can manage your cookie preferences at any time using our{" "}
              <a href="/cookie-policy">cookie banner</a>, or via your browser settings.
            </p>
            <p>
              6.2 When you engage with our ads, any information you provide (such as via a lead
              form) will be processed in line with this Privacy Policy and by Meta under its own
              Privacy Policy.
            </p>

            <h2 id="rights" className="mt-10 mb-4 scroll-mt-24">7. Your Rights</h2>
            <p>
              7.1 You have the right to request access to your personal data, correct inaccuracies,
              request deletion, restrict processing, or object to the use of your data in certain
              circumstances.
            </p>
            <p>7.2 You can withdraw consent for marketing at any time.</p>

            <h2 id="contact" className="mt-10 mb-4 scroll-mt-24">8. Contact Us</h2>
            <p className="not-prose rounded-xl border bg-neutral-50 p-4 text-sm leading-6">
              <span className="block font-medium">Data Protection Lead</span>
              Dr Qasim Ali
              <br />
              Email: <a href="mailto:support@aion-clinic.com">support@aion-clinic.com</a>
              <br />
              Phone: 07856 128934
              <br />
              Address: 384 City Road, Islington, London, EC1V 2QA
              <br />
              ICO Registration:&nbsp;
              <a
                className="underline"
                href="https://ico.org.uk/ESDWebPages/Entry/ZB808864"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZB808864
              </a>
            </p>
            <p>
              If you are unhappy with how we handle your data, you can lodge a complaint with the{" "}
              <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">
                Information Commissioner’s Office
              </a>.
            </p>

            <h2 id="updates" className="mt-10 mb-4 scroll-mt-24">9. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be
              available on our website.
            </p>

            <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <Link href="/" className="w-full sm:w-auto">
                <Button className="w-full">Back to home</Button>
              </Link>
              <a
                href="#introduction"
                className="text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
              >
                Back to top
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
