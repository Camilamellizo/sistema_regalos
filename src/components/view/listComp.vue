<template>
  <div class="font-sans ">

    <div class="relative min-h-screen flex flex-col sm:justify-center items-center ">



      <div class="relative sm:max-w-sm w-full bg-yellow-200 pt-7 pr-7 pl-7 ">
        <div>
          <h1>Mi lista de deseos:</h1>
          <label for="nombre"></label>
          <input type="text" v-model="nombre" placeholder="Deseo 01" required
            class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
          <label for="nombre"></label>
          <input type="text" v-model="nombre" placeholder="Deseo 02" required
            class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
          <label for="nombre"></label>
          <input type="text" v-model="nombre" placeholder="Deseo 03" required
            class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
          <label for="nombre"></label>
          <input type="text" v-model="nombre" placeholder="Deseo 04" required
            class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
          <label for="nombre"></label>
          <input type="text" v-model="nombre" placeholder="Deseo 05" required
            class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">


        </div>
        <div class="relative w-full rounded-2xl  px-1 py-1 bg-gray-100 shadow-md">


        </div>

        <div class="mt-10 font-mono">
          <label class="block font-medium text-sm text-gray-600 w-full">
            Consulta el clima en Rovaniemi para saber si los regalos podran ser recibidos correctamente
          </label>

          <div class="mt-7">
            <button type="submit" @click="getWeather()"
              class="bg-green-900 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
              Actualiza
            </button>
          </div>

          <div class="flex mt-7 items-center text-center">
            <hr class="border-gray-300 border-1 w-full rounded-md">
            <label class="block font-medium text-sm text-gray-600 w-full">
              El Clima en Rovaniemi
            </label>
            <hr class="border-gray-300 border-1 w-full rounded-md">
          </div>
          <div v-if="weather" class="grid  justify-items-center text-center">
            <img :src="imgUrl" :alt="weather.name" class="w-32 h-32">
            <h2>{{ weather.main.temp }}</h2>
            <p>{{ weather.name }},{{ weather.sys.country }}</p>
          </div>

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
      key: "0e580afee13da9ed1a14afb86d1d8bf8"
    };
  },
  computed: {
    imgUrl: function () {
      return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
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
    }
  }


};
</script>
  
<style>

</style>