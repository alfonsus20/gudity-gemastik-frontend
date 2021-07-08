module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#1854FF",
          secondary : '#175F88',
          donker : '#15151F'
        },
        violet: '#1D103D',
        gray : {
          DEFAULT : '#21212B',
          secondary : '#1D1D25'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
