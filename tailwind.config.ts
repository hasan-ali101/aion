import { section } from "motion/react-client";
import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  plugins: [require("tailwindcss-animate")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat"], // Default font
      heading: ["Sora"], // Heading font
    },
    extend: {
      maxWidth: {
        section: "1200px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2E4E3F",
        primaryDark: "#1F3D2D",
        primaryLight: "#39794A",
        muted: "#DEDCD8",
        beige: "#F7F0E6",
        secondary: "#E0F2F0",
        tertiary: "#607D8B",
        tertiaryDark: "#496775",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        rotate: "rotate 6s linear infinite",
        reverseRotate: "rotate 6s linear infinite reverse",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
} satisfies Config;
