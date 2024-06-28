/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["dark", {
      business: {
        ...require("daisyui/src/theming/themes")["business"],
        primary: "#0A59F8",
        secondary: "#393B4A",
        accent: "#1B1C22"
      },
    },],
  },
}