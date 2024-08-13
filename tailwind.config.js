/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},

    screens: {
      'xs': '302px',

     'sm': '462px',
      // => @media (min-width: 640px) { ... }

      'md': '608px',
      // => @media (min-width: 768px) { ... }

      'lg': '920px',
      // => @media (min-width: 1024px) { ... }

      'xl': '90%',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1440px',
    },
    container: {
      center: true
    },
    colors: {
      'primary': '#7B9645',
      'secondary': '#53514D',
      'light': '#fff',
      'dark': '#201818',
    },
    fontFamily: {
      altivo: ["altivo","sans-serif"],
      bai: ["bai-jamjuree","sans-serif"],
    },
  },
  plugins: [],
}

