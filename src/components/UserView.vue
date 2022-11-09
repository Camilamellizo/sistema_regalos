<template>

  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center  ">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-green-700 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div class="card bg-red-600 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label for="" class="block mt-3 text-2xl text-gray-700 text-center font-semibold">
            Estás a punto de hacer tu lista de deseos, pero antes ...
          </label>
          <div class="mt-10 font-mono">
            <div>
              <label for="nombre">Nombre:</label>
              <input type="text" v-model="nombre" placeholder="Nombre:"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>
            <div>
              <label for="edad">Edad</label>
              <input type="number" min="1" max="60" v-model="edad" placeholder="Edad"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>
            <div>
              <div class="mb-4 ">
                <label for="pregunta">¿Te has portado bien este año?</label>
                <div class="flex justify-center">
                  <div class="flex items-center mr-8">
                    <input id="inline-checkbox" type="checkbox" value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="inline-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Si</label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value=""
                      class="w-4 h-4  bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="inline-2-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-4" v-show="validatioForm">
              <span class="text-red-900">** Todos los campos son Obligatorios</span>
            </div>


            <div class="mt-7">
              <button type="submit" @click="guardarpersonInfo()"
                class="bg-green-700 w-full py-3 rounded-xl text-white font-mono shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Entrar
              </button>
            </div>
            <div>
              <RouterView />

            </div>

            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md">
              <label class="block font-medium text-sm text-gray-600 w-full">
                Feliz Navidad
              </label>
              <hr class="border-gray-300 border-1 w-full rounded-md">
            </div>


          </div>

        </div>
      </div>
    </div>
  </div>

</template>


<script>
//import { RouterView } from 'vue-router'
//import catalogoFamily from './view/catalogoFamily.vue'

export default {
  name: 'UserView',

  data() {
    return {
      nombre: "",
      edad: "",
      pregunta: "",
      validatioForm: false
    }
  },

  methods: {

    guardarpersonInfo() {
      if (this.nombre && this.edad) {
        const persona = {                           // creo la persona en una variable //crear el objeto//
          nombre: this.nombre,
        }
        console.log(persona),
          this.$user = this.nombre,
          console.log(this.$user)
        this.nombre = "",
          this.edad = "",
          this.validatioForm = false
          this.$router.push({name:"catalogo"})  // ir a la ruta sin router link -- el nombre de la ruta de routes.js 

      } else {
        this.validatioForm = true
      }

    }

  }
}
</script>

