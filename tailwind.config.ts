import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0b0b0a",
          2: "#141412",
          3: "#1c1b18",
        },
        paper: {
          DEFAULT: "#f5f1e8",
          2: "#a8a39a",
          3: "#6b665d",
        },
        rule: "#2a2925",
        accent: {
          DEFAULT: "#e8590c",
          soft: "#3a1f0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
        display: ["2.25rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        title: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        label: "0.18em",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    base: false,
    styled: false,
    utils: false,
  },
};
export default config;
