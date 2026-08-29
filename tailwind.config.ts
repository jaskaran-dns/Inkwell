import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EC",
        "paper-dim": "#EFEBE0",
        ink: "#1B1A17",
        "ink-soft": "#514C42",
        oxblood: "#7A2E2E",
        "oxblood-dark": "#5E2222",
        moss: "#566246",
        gold: "#B08D57",
        line: "#DAD3C2",
        "line-strong": "#C3B9A0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-body-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "3px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(27, 26, 23, 0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
