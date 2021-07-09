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
        },
        violet: "#1D103D",
        gray: {
          DEFAULT: "#21212B",
          secondary: "#1D1D25",
        },
      },
      spacing: {
        88: "22rem",
        92: "23rem",
        100: "25rem",
      },
      boxShadow: {
        DEFAULT: "0px 4px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
