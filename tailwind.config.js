module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#1854FF",
          secondary : '#175F88'
        },
        violet: '#1D103D'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
