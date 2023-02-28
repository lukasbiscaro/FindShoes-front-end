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
        bgLogin: '#1c1c2b',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation : {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'marquee 40s linear infinite',
      },
    },
    fontFamily: {
      'sans': 'Inter, Helvetica, Arial',
    }
  },
  plugins: [],
}
