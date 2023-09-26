/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p_black: "#000000",
        p_white: "#CCCCCC",
        p_green: "#DAFF01",
        p_purple: "#9353FF",
      },
   
    },
  },
  plugins: [],
};
