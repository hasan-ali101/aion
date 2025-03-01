import "@/styles/globals.css";
import { cn } from "@/utils";
import type { AppProps } from "next/app";
import { Montserrat, Sora } from "next/font/google";

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
    <Component
      className={cn(montserrat.className, sora.className)}
      {...pageProps}
    />
  );
}
