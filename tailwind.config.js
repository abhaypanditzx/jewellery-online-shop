/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
  
    extend: {
      screens:{
        xs:"450px",
        xs2:'320px',
        Xxs: '390px',
      },
      colors:{
       'primary': '#111827',
        'secondary': '#b91c1c',
        'tertiary': '#F8CBCB'
      }
    },
  },
  plugins: [],
}