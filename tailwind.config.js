/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'xs': { 'max': '480px' },
      'sm': { 'min': '481px'},
      'md': { 'min': '768px'},
      'lg': { 'min': '980px'},
      'xl': { 'min': '1025px'},
      '2xl': { 'min': '1181px' },
      '3xl': { 'min': '1440px' },
    },

      container: {
      center: true,
      screens: {
        xs: '302px',
        sm: '462px',
        md: '608px',
        // lg: '90%',
        // xl: '90%',
        // '2xl': '90%',
        // '3xl': '1396px',
      },
      },     
     

    fontFamily: {
      altivo: ['altivo', 'sans-serif'],
      bai: ['bai-jamjuree', 'sans-serif'],
    },

    extend: {

      colors: {
        'primary': '#7B9645',
        'secondary': '#53514D',
        'light': '#fff',
        'dark': '#201818',
      },
     

      fontSize: {
        '3xl-md': '32px',
        '3xl-2xl': '56px',
        '2xl-2xl': '32px',

      },

       lineHeight: {
        '6': '1.33em',
      },

      plugins: [],
    }
  }
}
