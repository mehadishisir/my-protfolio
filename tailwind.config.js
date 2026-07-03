/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Background
        paper: "#030712",
        paper2: "#111827",

        // Text
        ink: "#F8FAFC",
        inkmuted: "#CBD5E1",
        muted: "#64748B",

        // Primary (Indigo)
        terracotta: "#6366F1",
        terracottadark: "#4F46E5",

        // Secondary (Cyan)
        pine: "#22D3EE",
        pinedark: "#0891B2",

        // Border
        line: "rgba(255,255,255,.08)",
      },

      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,.35)",
        cyan: "0 0 40px rgba(34,211,238,.25)",
      },
    },
  },

  plugins: [],
};