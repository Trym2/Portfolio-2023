/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './**/*.{html,js}',],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["montserrat", "Verdana"],
      },
      fontSize: {
        '3xl': '32px',
      }
    },
  },
  plugins: [],
}
