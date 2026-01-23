/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "520px",
      },
      colors: {
        main: "#213E59",
        placeholder: "#828282",
        red: "#C17F80",
        black: "#262A2C",
        white: "#fff",
        white1: "#e4e4e4",
        white2: "#F9F3F3",
        text1: "#53697E",
        border1: "#18181b1d",
      },
      backgroundColor: {
        beige: "#F9F3F3",
        "dark-blue": "#223F5A",
        "dark-bl": "#213E59",
        "red-beige": "#C17F80",
        "red-beige-hover": "#a56162",
        "radio-gradient":
          "radial-gradient(108.71% 611.14% at 18.27% 63.41%, #C17F80 0%, #DDA8A9 100%)",
      },
    },
  },
  plugins: [],
};
