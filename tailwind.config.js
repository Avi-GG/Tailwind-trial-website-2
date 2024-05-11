/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'avi':  '#152238'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Nunito': ['Nunito', 'sans-serif']
      }

    },
  },
  plugins: [],
}

