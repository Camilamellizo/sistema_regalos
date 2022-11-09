<template>
<div class="font-mono text-xl text-red-900">
  <nav class="bg-amber-200 text-white font-mono border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 mb-2 mx-10 rounded">
    <div class=" flex flex-wrap justify-between items-center mx-auto ">
      <span class="self-center text-2xl whitespace-nowrap text-red-900 pl-8">Hola</span>
      <div class="flex items-center md:order-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red"
          class="w-10 h-10 mr-8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </div>
  </nav>
  <!-- parte 2 galeria de imagenes  -->
  <section class="overflow-hidden bg-red-600 mx-10 rounded">
    <div class="bg-red-600 rounded text-white">
        <span>Esta Navidad esta llena de deseos... Escoge 4 de estos Regalos para enviar en tu carta a Papá Noel.
        </span>
      </div>
    <div class="container px-5 py-2 mx-auto lg:pt-4 lg:px-20">
      <div class="flex flex-wrap -m-1 md:-m-2">

        <div class="flex flex-wrap w-1/4">
          <div class="w-full p-1 md:p-2 " v-for="(project, index) in projects" :key="index">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src=project.image>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- parte 3 - 1 fila 2 columnas -->

  <!-- columna 1 -->
  <div class="grid grid-cols-3 gap-4 mx-10 my-4">

    <div class="col-span-2 rounded">
      <!-- parte 1 -->
      <div class="bg-amber-200 rounded text-red-900 h-12 pt-2 pb-2">
        <span> Regalos
        </span>
      </div>
      
      <!-- parte 2 -->
      <!-- en este div van las imagenes que escoge la persona -->
      <div class="grid grid-cols-4 gap-2 py-2 px-2 bg-red-600 rounded h-80">

        <div class="col-span-1 pt-4 pl-2">
          <img
            src="https://images.pexels.com/photos/13672084/pexels-photo-13672084.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="" class="rounded h-64 ">
        </div>
      </div>
      <div class="bg-red-600 rounded pb-2">
        <button type="submit"
          class="bg-amber-200  px-3 py-3 rounded-xl text-red-900 shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
          <RouterLink to="/carta">Ver mi Carta</RouterLink>
        </button>
      </div>
    </div>

    <!-- columna 2 -->

    <div class="col-span-1  flex flex-col">
      <!-- fila 1 api weather-->
      <div class="mb-4 ">
        <div class="bg-amber-200 text-red-900 rounded h-12 rounded pt-2">
          <span>El Clima</span>
        </div>
        <div class="bg-red-600 rounded  ">
          <div v-if="weather" class="grid  justify-items-center text-center text-white font-mono pb-2">
            <img :src="imgUrl" :alt="weather.name" class="w-24 h-24 rounded">
            <h2>{{ weather.main.temp }}</h2>
            <p>{{ weather.name }},{{ weather.sys.country }}</p>
          </div>
        </div>
      </div>


      <!-- fila 2 api-peliculas -->
      <div class=" ">
        <div class="bg-amber-200  text-red-900 rounded h-12 rounded pt-2">
          <span>Peliculas</span>
        </div>
        <div class="bg-red-600 rounded h-32 pt-4">
          <span class="text-white font-mono "> Ya tienes planes para esta navidad? <br>haz click 
            <span class="underline"><RouterLink to="/peliculas">Aqui</RouterLink></span> para ver una pelicula en familia. 
          </span>
        </div>
      </div>

     
    </div>



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
    nombre:"",
    loading: false,
      location: "Rovaniemi",
      weather: null,
      error: "",
      key:"0e580afee13da9ed1a14afb86d1d8bf8"   
    }
  },
  computed: {
    imgUrl: function() {
      return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
    },
    
    projects() {
      return this.$allProjects
    },
    computed: {
    userName() {
      return this.$nameUser
    }
  },


  },

  mounted() {
    this.getWeather()
  },

 methods:{
  getWeather(){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.key}&units=metric`)
      //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0e580afee13da9ed1a14afb86d1d8bf8
      .then((res)=>{
        if(!res.ok) throw new Error("Tenemos problemas cargando tus Datos")
        return res.json();
      })
      .then((data) => (this.weather = data))
      .catch((e) => (this.error = e))
    }

 }
}

</script>  
