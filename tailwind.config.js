/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      xs: { max: '480px' },
      sm: { min: '481px' },
      md: { min: '768px' },
      lg: { min: '980px' },
      xl: { min: '1025px' },
      '2xl': { min: '1181px' },
      '3xl': { min: '1440px' },
    },

    container: {
      center: true,
      screens: {
        // xs: '302px',
        // sm: '462px',
        // md: '608px',
        // // lg: '90%',
        // // xl: '90%',
        // // '2xl': '90%',
        // // '3xl': '1396px',
      },
    },

    fontFamily: {
      popp: ['Poppins', 'sans-serif'],
      osw: ['Oswald', 'sans-serif'],
    },

    extend: {
      boxShadow: {
        md: '0px 6px 0px 0px #A190CC',
        xl: '0px 6px 0px 0px #262a3b',
        sm: '0px -2px 20px 0px rgba(0, 0, 0, 0.10)',
      },

      colors: {
        primary: '#262A3B',
        secondary: '#424242',
        'light-grey': '#F4F2F0',
        light: '#fff',
        dark: '#272727',
        'btn-primary': '#A190CC',
        'btn-secondary-bg': '#D6CF1F',
      },

      fontSize: {
        // '3xl-md': '32px',
        // '3xl-2xl': '56px',
        // '2xl-2xl': '32px',
        '4xl-3xl': '34px', // 3xl: 'screen size',
        '2xl-3xl': '26px', // 3xl: 'screen size',
        'xl-3xl': '22px', // 3xl: 'screen size',
      },

      lineHeight: {
        6: '1.33em',
        7: '1.44em',
      },

      plugins: [],
    },
  },
};