const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#1854FF",
          secondary: "#175F88",
          donker: "#15151F",
          marker: "#1D2D74",
          dark: "#110828",
          light : '#186CFF',
          progress : '#8BA9FF'
        },
        violet: "#1D103D",
        gray: {
          DEFAULT: "#21212B",
          secondary: "#1D1D25",
        },
        orange: {
          DEFAULT: "#FB8200",
        },
        purple : {
          DEFAULT : '#1d2d74'
        }
      },
      spacing: {
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
      },
      boxShadow: {
        DEFAULT: "0px 4px 20px rgba(0, 0, 0, 0.08)",
      },
    },
    screens: {
      xs: "476px",
      slg : "864px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
