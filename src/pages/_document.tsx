/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

 {/* Meta domain verification */}
        <meta name="facebook-domain-verification" content="[PLACEHOLDER]" />

{/* 1. Consent defaults — must be before GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
              });
            `,
          }}
        />

        {/* 1b. Typeform postMessage listener */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('message', function(event) {
                if (event.origin !== 'https://form.typeform.com') return;
                var data = event.data;
                if (!data || !data.type) return;
                if (data.type === 'form-started') {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: 'evt_f1', formId: data.formId });
                }
                if (data.type === 'form-submit') {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: 'evt_f3', formId: data.formId });
                }
              });
            `,
          }}
        />

        {/* 2. Silktide CSS - Removed for now 10/3/26*/}

        {/* 3. Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WB9LQ8P9');`,
          }}
        />
      </Head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WB9LQ8P9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Main />

        {/* Tidio */}
        <script src="//code.tidio.co/c2ozy1ksg8x5qatlh0rwof8q6jasaahv.js" async></script>

        {/* 4. Silktide JS - Removed for now 10/3/26*/}

        {/* 5. Silktide config - Removed for now 10/3/26*/}

        <NextScript />
      </body>
    </Html>
  );
}