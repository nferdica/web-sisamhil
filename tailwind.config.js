/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../../assets/img/elementos.png')",
      },
      colors: {
        'primary': '#042F57',
        'secondary': '#E4003C',
        'background': '#F5F5F5',
        'background-foreground': '#DEE1E6',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
      screens: {
        '3xl': '1920px',
      }
    },
    plugins: [],
  }
};

