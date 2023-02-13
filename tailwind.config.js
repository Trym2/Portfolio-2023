/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}',],
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
