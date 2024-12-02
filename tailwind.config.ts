import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "rgb(var(--background))",
        card: "rgb(var(--card))",
        "card-hover": "rgb(var(--card-hover))",
        primary: "rgb(var(--primary))",
        accent: "rgb(var(--accent))",
      },
    },
  },
  plugins: [],
} satisfies Config;
