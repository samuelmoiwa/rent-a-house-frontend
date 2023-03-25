/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#FF6347',
        'theme-color': '#FF830E',
        'button-color': '#FF830E',
        'icon-color': '#C66202',
        'focus-color': '#E87305',
        'icon-hover-color': '#BE5D02',
        'button-hover-color': '#FC8B21',
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
