import type { AppProps } from "next/app";
import { Montserrat, Sora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Nav from "@/components/nav";
import { Footer } from "@/components/sections";
import "@/styles/globals.css";
import { cn } from "@/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-primary">
      <Nav />
      <Component
        className={cn(montserrat.className, sora.className)}
        {...pageProps}
      />
      <Footer />
      <GoogleAnalytics gaId="G-M0189XZY38" />
    </div>
  );
}
