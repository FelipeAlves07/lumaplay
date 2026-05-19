/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumablack: "#05070d",
        lumadark: "#0B0F1A",
        lumablue: "#00B7FF",
        lumapurple: "#8A2BE2",
      },
    },
  },
  plugins: [],
}