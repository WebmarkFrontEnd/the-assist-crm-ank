/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '480px'},

      'sm': {'min': '481px', 'max': '767px'},

      'md': {'min': '768px', 'max': '979px'},

      'lg': {'min': '980px', 'max': '1024px'},

      'xl': { 'min': '1025px', 'max': '1180px' },

      '2xl': {'min': '1181px', 'max': '1439px'},

      '3xl': {'min': '1440px'},

    },

    // screens: {
    //   'xs': '302px',

    //  'sm': '462px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '608px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '920px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '90%',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1280px',
    //   // => @media (min-width: 1536px) { ... }

    //   '3xl': '1440px',
    // },
     container: {
      center: true,
      screens: {
        xs: '302px',   // Full width for extra small screens
        sm: '462px',   // Full width for small screens
        md: '608px',  // Custom width for medium screens
        lg: '90%',  // Custom width for large screens
        xl: '90%', // Custom width for extra-large screens
        '2xl': '90% ', // Custom width for 2x-large screens
        '3xl': '1320px', // Custom width for 2x-large screens
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

