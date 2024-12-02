/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        card: "rgb(var(--card))",
        "card-hover": "rgb(var(--card-hover))",
        primary: "rgb(var(--primary))",
        accent: "rgb(var(--accent))",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      animation: {
        'text-shimmer': 'text-shimmer 2s ease-out infinite',
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
}

