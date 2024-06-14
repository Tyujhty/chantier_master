/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        input: {
          bg: "#e5e7eb",
        },
        link: {
          primary: "#31C48D",
          hover: "#227858",
        },
        darkMode: {
          bgDarkMode: "#181818",
        },
      },
      width: {
        buttonSize: "200px",
        maxLogoSize: "350px",
        logoSizeSignin: "150px",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
