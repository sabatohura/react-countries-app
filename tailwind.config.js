/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ThemeColor : {
          DmDarkBlue: 'hsl(209, 23%, 22%)',
          DmVeryDarkBlue: 'hsl(207, 26%, 17%)',
          LmVeryDarkBlue: 'hsl(200, 15%, 8%)',
          LmDarkGray: 'hsl(0, 0%, 52%)',
          LmVeryLightGray: 'hsl(0, 0%, 98%)',
          BWhite: 'hsl(0, 0%, 100%)'
        }
      }
    },
  },
  plugins: [],
}