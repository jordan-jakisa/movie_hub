/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImae: {
        "hero-pattern": "url('/assets/dune.jpg')",
      },
      colors: {
        primary: "#FF0000",
      },
    },
  },
  plugins: [],
};
