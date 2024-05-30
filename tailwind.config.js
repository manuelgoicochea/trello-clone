/** @type {import('tailwindcss').Config} */
const colors= require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: {
    content: ["./src/**/*.{html,js}"],
    options: {
      safelist: [
        'bg-success-700', 'hover:bg-success-800', 'focus:ring-success-300',
        'bg-primary-700', 'hover:bg-primary-800', 'focus:ring-primary-300',
        'bg-red-700', 'hover:bg-red-800', 'focus:ring-red-300',
      ]
    }
  },
  theme: {
    extend: {
        colors:{
          success: colors.green,
          primary: colors.blue,
          red:colors.red,  
          danger: colors.red,   

        } 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

