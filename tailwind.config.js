/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F2",
        paper2: "#F2EEE4",
        ink: "#182524",
        inkmuted: "#4B5A56",
        muted: "#8B8577",
        pine: "#2F6F62",
        pinedark: "#1F4B41",
        terracotta: "#C4622D",
        terracottadark: "#A34E22",
        line: "#DED7C6",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
