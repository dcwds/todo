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
      gray: {
        darkest: "#161e2d",
        dark: "#1f2937",
        normal: "#8490a6"
      },
      blue: colors.blue
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
