/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#4D4D4D",
        secondary: "#9CAA00",
        brand: "#233000",
      },
    },
    fontFamily: {
      primary: ["Rufina", "serif"],
    },
  },
  plugins: [],
};
