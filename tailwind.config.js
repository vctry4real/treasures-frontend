/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundColor: {
        primary: 'var(--color-primary)', // Corrected from --bg-primary
        secondary: 'var(--color-secondary)',
        lightGreen: 'var(--color-button-hover)',
        'secondary-100': '#fff7d4',
        'secondary-200': '#ffe78a',
        'secondary-300': '#ffd13f',
        'secondary-400': '#f9bc00',
        'secondary-500': '#f8b400', // Base color
        'secondary-600': '#d79800',
        'secondary-700': '#b37a00',
        'secondary-800': '#8e5c00',
        'secondary-900': '#694000',

        greenBtnActiveBg: 'var(--color-greenBtnActiveBg)',
        greenBtnActiveBorder: 'var(--color-greenBtnActiveBorder)',
        greenBtnInactiveBg: 'var(--color-greenBtnInactiveBg)',
        greenBtnInactiveBorder: 'var(--color-greenBtnInactiveBorder)',
      },

      textColor: {
        color: {
          gray: 'var(--text-white-bg)',
          white: 'var(--text-colored-bg)',
          secondarys: '#f8b400',
        },
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      button: {
        btn: {
          primary: 'var(--color-button-primary)',
          secondary: 'var(--color-secondary)', // Corrected from --bg-secondary
          hover: 'var(--color-button-hover)', // Include hover state directly in btn
        },
      },
    },
  },
};
