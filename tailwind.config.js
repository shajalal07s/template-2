/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#34bf49',
        'color-secndary': '#2d465e',
        'text-color': '#e1e1e2',
        'color-white-bold': '#f3f4f4',
        'color-border': '#F0F0F0',
        'color-white-dark': '#FDF7FB',
        'gradient-start': '#FFFFFF',
        'gradient-end': '#D8A7BE',
      },
      fontFamily : {
        'font-roboto': 'Roboto',
        'font-lato': 'lato',
      }
    },
    container : {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '0px',
      }
    }
  },
  plugins: [],
}