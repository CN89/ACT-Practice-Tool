/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        custom: '1000px'
      },
      colors: {
        tertiary: '#1f2833',
        primary: '#f8fafc',
        secondary: '#1f2833',
        text: '#0b0c10',
        buttonText: '#ddd6fe',
        base: '#f8fafc',
        grey: '#d1d5db'
      }
    },
  },
  variants: {
    backgroundColor: ['response', 'hover', 'focus', 'active']
  },
  plugins: [require('daisyui')],
}

