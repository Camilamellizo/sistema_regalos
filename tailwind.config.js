/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

      fontFamily: {

        'yellowtail': ['Edu VIC WA NT Beginner,cursive'],
        'opensans': ['Open Sans', 'sans-serif']
      },
    extend: {
      backgroundImage: {
        'fondo': "url('/src/assets/fondo2.jpg')",
        'nieve': "url('/src/assets/nieveiz.png')",
        'regalos': "url('/src/assets/regalos.png')",
        'bolas': "url('/src/assets/bolas.png')",
        'imagenes':"url('/src/assets/plantill-carta.png')",
         
      },  
      spacing: {
        '98': '34rem',
      },
      backgroundSize: {
        '100': '45rem',
      },
      cursor: {
        'navidad': 'url(http://cur.cursors-4u.net/nature/nat-4/nat394.cur), progress',
        'navidad2': 'url(http://cur.cursors-4u.net/holidays/hol-3/hol280.cur), pointer',
      }
    },
  },
  plugins: [],
}
