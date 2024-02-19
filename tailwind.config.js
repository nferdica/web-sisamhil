/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#042F57',
        'secondary': 'E4003C',
        'background': '#F5F5F5',
        'background-foreground': '#DEE1E6',
      },
      fontFamily: {
        body: ['Roboto'],
      }
    },
  },
  plugins: [],
}

