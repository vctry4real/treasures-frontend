/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      backgroundColor: {
        primary: 'var(--color-primary)', // Corrected from --bg-primary
        orange: 'var(--color-secondary)',
        lightGreen: 'var(--color-button-hover)',
      },
      
      textColor: {
        color: {
          gray: 'var(--text-white-bg)',
          white: 'var(--text-colored-bg)',
        },
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
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
