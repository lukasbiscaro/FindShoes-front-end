/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0A0817',
        bgSecondary: '#FEFEFE',
        highlightPrimary: '#5E36FF',
        highlightPrimary2: '#A088FF',
        highlightSecondary: '#BE54FF',
        textBlack: '#03030B',
        textWhite: '#F5F5F5',
        textGray: '#9B9B9B',
        bgLogin: '#1c1c2b'
      }
    },
  },
  plugins: [],
}
