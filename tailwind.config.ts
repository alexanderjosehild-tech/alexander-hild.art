import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#131310",
        night: "#0C0C0B",
        cloud: "#F1EFEA",
        stone: "#8B867B",
        line: "rgba(19,19,16,0.10)",
        "line-dark": "rgba(241,239,234,0.12)",
        patina: "#4C5D51",
        "patina-soft": "#7C9484",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 9vw, 8.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-3": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      transitionTimingFunction: {
        gallery: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
export default config;
