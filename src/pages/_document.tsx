// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* Meta domain verification */}
        <meta
          name="facebook-domain-verification"
          content="jbe171dhfq0cgarmzkob3p82jpns9l"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <script src="//code.tidio.co/owio4o90ktvdhweukqy6pqjube1kjn1u.js" async />
        <NextScript />
      </body>
    </Html>
  );
}
