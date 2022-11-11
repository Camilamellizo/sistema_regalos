<template>
  <div class=" text-xl text-red-900">
    <nav class="bg-gray-300/75 border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900  mx-10 rounded">
      <div class=" flex flex-wrap justify-between items-center mx-auto ">
        <span class="self-center text-2xl whitespace-nowrap text-red-900 pl-8 font-yellowtail italic">Hola {{ userName }}
        </span>
        <div class="flex items-center md:order-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
            class="w-10 h-10 mr-8">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
    </nav>
    <!-- parte 2 galeria de imagenes  -->
    <section class="overflow-hidden bg-red-900/75 mx-10 rounded border border-transparent border-x-gray-300 border-b-white">
      <div class="bg-red-900/75 rounded text-white font-opensans p-2 ">
        <span>Esta Navidad esta llena de deseos... Escoge 4 de estos Regalos para enviar en tu carta a Papá Noel.
        </span>
      </div>
      <div class="container px-5 py-2 mx-auto lg:pt-4 lg:px-20">
        <div class="flex flex-wrap -m-1 md:-m-2">

          <div class="flex  ">
            <div class="h-64 w-48 p-1 md:p-2 " v-for="(project, index) in projects" :key="index">
              <img alt="gallery" @click="guardarImagen(index)"
                class="block  object-center  rounded-lg border border-white hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                :src=project.image>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- parte 3 - 1 fila 2 columnas -->

    <!-- columna 1 -->
    <div class="grid grid-cols-3 gap-4 mx-10 my-4">

      <div class="col-span-1  flex flex-col">
        <!-- fila 1 api weather-->
        <div class="mb-4 mt-4 ">
          <div class="bg-gray-300/75 text-red-900 rounded h-12 pt-2 font-yellowtail italic">
            <span>El Clima 🌤️</span>
          </div>
          <div class="bg-red-900/75 rounded border border-transparent border-x-gray-300 border-b-gray-300 ">
            <div v-if="weather" class="grid  justify-items-center text-center text-white font-opensans pb-2">
              <img :src="imgUrl" :alt="weather.name" class="w-24 h-24 rounded">
              <h2>{{ weather.main.temp }}</h2>
              <p>{{ weather.name }},{{ weather.sys.country }}</p>
            </div>
          </div>
        </div>


        <!-- fila 2 api-peliculas -->
        <div class=" ">
          <div class="bg-gray-300/75  text-red-900 rounded h-12 rounded pt-2 font-yellowtail italic">
            <span>Peliculas 📽️</span>
          </div>
          <div class="bg-red-900/75 rounded h-38 p-8 border border-transparent border-x-gray-300 border-b-gray-300">
            <span class="text-white font-opensans "> Ya tienes planes para esta navidad? <br>haz click
              <span class="text-amber-200 font-yellowtail ">
                <RouterLink to="/peliculas">Aqui</RouterLink>
              </span> para ver una pelicula en familia.
            </span>
          </div>
        </div>

      </div>

      <div class="col-span-2 rounded">
        <!-- parte 1 -->
        <div class="bg-gray-300/75 rounded text-red-900 h-12 pt-2 pb-2 flex flex justify-center font-yellowtail italic">
          <p>Regalos</p>
          <span>🎁</span>
        </div>
        <!-- parte 2 -->
        <!-- en este div van las imagenes que escoge la persona -->
        <div
          class="grid grid-cols-4 gap-2 py-2 px-2 bg-red-900/75 rounded-t-lg h-96  border border-transparent  border-x-gray-300">
          <div class="col-span-1 pt-4 pl-2 font-opensans flex" v-for="(image, index) in gifts_selected" :key="image.title">
            <div>
              <div class="col-span-1  p-1 md:p-4 ">
                <img :src=image.image class="h-48 w-48  rounded border border-white">
              </div>
              <div>
                <button type="button" @click="eliminarImagen(index)"
                  class="hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-red-900/75 rounded-b-lg pb-2 mb-8 border border-transparent border-x-gray-300 border-b-gray-300">
          <button type="submit"
            class="bg-gray-300 font-yellowtail italic px-3  rounded-xl text-red-900 shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
            <RouterLink to="/carta">Ver mi Carta </RouterLink>
          </button>
        </div>
      </div>

      <!-- columna 2 -->

      
    </div>
  </div>

</template>
      
<script>
export default {
  name: "catalogoFamily",

  data() {
    return {

      title: "",
      image: "",
      description: "",
      nombre: "",
      showImage: false,
      loading: false,
      location: "Rovaniemi",
      weather: null,
      error: "",
      key: "0e580afee13da9ed1a14afb86d1d8bf8",
      gifts_selected: []
      
    }
  },
  computed: {
    imgUrl: function () {
      return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
    },
    projects() {
      return this.$allProjects
    },
    userName() {
      return this.$user[0]
    },
  },

  mounted() {
    this.getWeather()
  },

  methods: {
    getWeather() {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.key}&units=metric`)
        //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0e580afee13da9ed1a14afb86d1d8bf8
        .then((res) => {
          if (!res.ok) throw new Error("Tenemos problemas cargando tus Datos")
          return res.json();
        })
        .then((data) => (this.weather = data))
        .catch((e) => (this.error = e))
    },
    guardarImagen(index) {

      if (this.$gifts_selected.length < 4) {
        const gift = this.$allProjects[index]
        this.gifts_selected.push(gift)
        this.$gifts_selected.push(gift)
      }   
       else {
        alert("Maximo 4 Regalos")
      }
      
    },

    eliminarImagen(index) {
      this.gifts_selected.splice(index, 1)
      this.$gifts_selected.splice(index, 1)
    },
  }
}

</script>  
