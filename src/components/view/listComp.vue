<template>
  <div class="font-opensans ">

    <div class="relative flex flex-col sm:justify-center items-center mb-4 bg-imagenes  bg-no-repeat bg-contain bg-center ">


      <div class="relative sm:max-w-sm   p-7 rounded  h-[600px] w-[500px]">
        <div class="rounded col-span1 h-32  ">
          <!-- muñeco de nieve -->
        </div>

        <label class="block font-medium text-sm text-red-900 text-xl italic mt-4">
          Este año me he portado bien y para esta navidad desearía:
        </label>
        <div v-for="project in projects" :key="project">
          <p class="mt-1 text-red-900 text-xl italic block"> {{ project.title }} </p>

        </div>



        <div class="mt-7">
          <button @click="Gracias()" type="submit"
            class=" font-yellowtail italic px-3 py-3 rounded-xl bg-green-900 text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
            Enviar
          </button>
          <h3 class="mt-2 italic" v-show=submited>{{ gracias }}</h3>
        </div>
        <div v-if="weather" class="flex text-red-900 text-2xl">
          <img :src="imgUrl" :alt="weather.name">
          <h2 class="pt-8 mr-4">{{ weather.main.temp }}</h2>
          <p class="pt-8">{{ weather.name }},{{ weather.sys.country }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaComp",

  data() {
    return {
      loading: false,
      location: "",
      weather: null,
      error: "",
      key: "0e580afee13da9ed1a14afb86d1d8bf8",
      gracias: "¡Gracias, tus regalos han sido enviados!",
      submited: false,
    };
  },
  computed: {
    imgUrl: function () {
      return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png
`

    },
    projects() {
      return this.$gifts_selected
    },
  },

  methods: {
    getWeather() {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=Rovaniemi&appid=${this.key}&units=metric`)
        //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0e580afee13da9ed1a14afb86d1d8bf8
        .then((res) => {
          if (!res.ok) throw new Error("Tenemos problemas cargando tus Datos")
          return res.json();
        })
        .then((data) => (this.weather = data))
        .catch((e) => (this.error = e))
    },
    Gracias() {
      this.submited = true
      return this.gracias
    }
  },
  mounted() {
    this.getWeather()

  },


};
</script>

<style>

</style>