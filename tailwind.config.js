/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '1rem',
      center: true,
    },
    extend: {
      fontFamily: {
        sans: [
          'Helvetica',
          'Arial',
          'Sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
