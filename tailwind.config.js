/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          primary: 'var(--bg-primary)',
          orange: 'var(--bg-secondary)',
        }
      },
      textColor: {
        color: {
          gray:'var(--text-white-bg)',
          white: 'var(--text-colored-bg)'
        }
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
        btn : {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        btnHover: {
          lightGreen:'var(--color-button-hover)',
        }
      }
    },
  },
};
