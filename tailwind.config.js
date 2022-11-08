/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      backgroundImage: {
       'fondo': "url('/src/assets/fondo.jpg')",
      },  
      spacing: {
        '98': '34rem',
      },
      backgroundSize: {
        '100': '45rem',
      },
    },
  },
  plugins: [],
}
