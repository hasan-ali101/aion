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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2E4E3F",
        primaryDark: "#1F3D2D",
        primaryLight: "#39794A",
        muted: "#DEDCD8",
        beige: "#F7F0E6",
        secondary: "#00796B",
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
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        rotate: "rotate 6s linear infinite",
        reverseRotate: "rotate 6s linear infinite reverse",
      },
    },
  },
} satisfies Config;
