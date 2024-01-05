/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}", "index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    //require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: false,
    },
}
