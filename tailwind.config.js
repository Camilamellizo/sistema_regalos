/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        'plus': "url('/src/assets/plus.png')", 
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
