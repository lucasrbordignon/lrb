/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    'index.html',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },

    colors: {
      gray: {
        '900': '#121214',
        '100': '#E1E1E6',
        '200': '#C4C4CC',
        '800': '#202024',
        '400': '#7C7C8A',
      },

      yellow: {
        '300': '#F7E188',
        '500': '#FFD42F'
      }
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
