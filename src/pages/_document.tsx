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
        <meta name="facebook-domain-verification" content="icnqqg7pnan23ystx4jub3nzbwra9m" />

{/* 1. Consent defaults — must be before GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });            `,
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

        {/* 2. Silktide CSS - Removed for now 10/3/26. Added back 10/4/26 */}

        <style dangerouslySetInnerHTML={{ __html: `@import url('/cookie-banner/silktide-consent-manager.css');` }} />

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

        {/* 4. Silktide JS - Removed for now 10/3/26. Added back 10/4/26 */}

        <script src="/cookie-banner/silktide-consent-manager.js" defer></script>

        {/* 5. Silktide config - Removed for now 10/3/26. Added back 10/4/26 */}
{/* 5. Silktide config - Removed for now 10/3/26. Added back 10/4/26 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
      function initSilktide() {
        silktideCookieBannerManager.updateCookieBannerConfig({                
          background: { showBackground: true },
          cookieIcon: { position: "bottomLeft" },
          cookieTypes: [
            {
              id: "necessary",
              name: "Necessary",
              description: "<p>These cookies are essential for Aion to function correctly. They cannot be switched off.</p>",
              required: true,
              onAccept: function() {}
            },
            {
              id: "analytics",
              name: "Analytics",
              description: "<p>These cookies help us understand how visitors use our site. All data is anonymised.</p>",
              defaultValue: false,
              onAccept: function() {
                gtag('consent', 'update', { analytics_storage: 'granted' });
                dataLayer.push({ event: 'consent_accepted_analytics' });
              },
              onReject: function() {
                gtag('consent', 'update', { analytics_storage: 'denied' });
              }
            },
            {
              id: "advertising",
              name: "Advertising",
              description: "<p>These cookies help us reach people who may benefit from our programme. They may be set by us or our partners.</p>",
              defaultValue: false,
              onAccept: function() {
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                });
                dataLayer.push({ event: 'consent_accepted_advertising' });
              },
              onReject: function() {
                gtag('consent', 'update', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                });
              }
            }
          ],
          text: {
            banner: {
              description: "<p>Aion uses cookies to improve your experience and help us reach people who could benefit from our services. <a href='https://www.aion-clinic.com/cookie-policy' target='_blank'>Cookie Policy</a>.</p>",
              acceptAllButtonText: "Accept all",
              acceptAllButtonAccessibleLabel: "Accept all cookies",
              rejectNonEssentialButtonText: "Reject non-essential",
              rejectNonEssentialButtonAccessibleLabel: "Reject non-essential cookies",
              preferencesButtonText: "Preferences",
              preferencesButtonAccessibleLabel: "Manage cookie preferences"
            },
            preferences: {
              title: "Your cookie preferences",
              description: "<p>We respect your privacy. You can choose which cookies Aion uses. Your preferences can be updated at any time.</p>",
              creditLinkText: "",
              creditLinkAccessibleLabel: ""
            }
          },
          position: { banner: "bottomLeft" }
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSilktide);
      } else {
        initSilktide();
      }
          `,
        }}
      />
        <NextScript />
      </body>
    </Html>
  );
}