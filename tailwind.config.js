/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        white: "#FFF1F1",
      },
      lightGreen: {
        primary: "#D8FFDD",
        hover: "#CEE2BE",
      },
      darkBlue: {
        primary: "#03045E",
        hover: "#2F57BD",
      },
      darkMode: {
        bgDarkMode: "#181818",
      },
    },
    width: {
      buttonSize: "200px",
      maxLogoSize: "350px",
    },
    screens: {
      xs: "500px",
    },
    extend: {},
  },
  plugins: [],
};
