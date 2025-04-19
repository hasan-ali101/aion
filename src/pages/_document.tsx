import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* You can also include larger icons for better display on devices like iOS */}
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Other meta tags, like for social media (we’ll address those later for LinkedIn/Facebook) */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

