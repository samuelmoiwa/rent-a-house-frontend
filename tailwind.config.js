/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#FF6347',
        'theme-color': '#97BF0F',
        'button-color': '#97BF0F',
        'icon-color': '#576D0D',
        'focus-color': '#81A30D',
        'icon-hover-color': '#607711',
        'button-hover-color': '#B9E623',
        'font-color': '#424242',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        noto: ['Noto Serif TC', 'serif'],
      },
    },
  },
  plugins: [],
};
