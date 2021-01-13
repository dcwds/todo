const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      gray: colors.coolGray,
      blue: colors.blue
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
