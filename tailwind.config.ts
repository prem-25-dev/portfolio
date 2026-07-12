import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        line: "var(--border)",
        primary: "var(--text-primary)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
        calligraphy: ["var(--font-calligraphy)", "Georgia", "serif"],
      },
      fontSize: {
        body: ["1.0625rem", { lineHeight: "1.75" }],
        tag: ["0.8125rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};

export default config;
