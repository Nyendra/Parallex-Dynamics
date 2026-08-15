import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        space: {
          darkest: "#05070b",
          bg: "#090b10",
          navy: "#0a0f1d",
          card: "rgba(17, 24, 39, 0.6)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        cyan: {
          accent: "#00f0ff",
          glow: "#00d2ff",
          subtle: "rgba(0, 240, 255, 0.15)",
        },
        purple: {
          accent: "#8b5cf6",
          glow: "#7000ff",
          subtle: "rgba(112, 0, 255, 0.15)",
        },
        parallax: {
          dark: "#05070c",
          navy: "#0a0f1d",
          graphite: "#121929",
          slate: "#1a2336",
          cyan: "#00f0ff",
          "cyan-glow": "rgba(0, 240, 255, 0.3)",
          purple: "#7928ca",
          "purple-glow": "rgba(121, 40, 202, 0.35)",
          accent: "#00d8f6",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px -5px rgba(0, 240, 255, 0.4)",
        "cyan-lg": "0 0 50px -10px rgba(0, 240, 255, 0.3)",
        "purple-glow": "0 0 35px -5px rgba(139, 92, 246, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-cyan": "glowCyan 2s infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glowCyan: {
          "0%": { boxShadow: "0 0 10px rgba(0, 240, 255, 0.2), inset 0 0 10px rgba(0, 240, 255, 0.1)" },
          "100%": { boxShadow: "0 0 25px rgba(0, 240, 255, 0.6), inset 0 0 15px rgba(0, 240, 255, 0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
        md: "12px",
        xl: "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;
