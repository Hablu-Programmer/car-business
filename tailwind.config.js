/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7963F0 ",
        foreground: "#9A9EA7",
        "foreground-dark": "#9A9EA7",
        outline: "#EEEEEE",
      },
      fontFamily: {
        inter: ['"Inter"', "serif"],
      },
    },
  },
  plugins: [],
};
