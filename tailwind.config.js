/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/src/**/*.{js,jsx}', './client/src/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'coolors': {
          100: '#22577A',
          200: '#38A3A5',
          300: '#57CC99',
          400: '#80ED99',
          500: '#C7F9CC'
          // ... other shades of gray
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


