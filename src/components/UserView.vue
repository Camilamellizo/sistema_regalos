<template>
  <div class="font-sans bg-red-900">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center  ">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-green-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label for="" class="block mt-3 text-2xl text-gray-700 text-center font-semibold">
            Estás a punto de hacer tu lista de deseos, pero antes ...
          </label>
          <div class="mt-10 font-mono">
            <div>
              <label for="nombre">Nombre:</label>
              <input type="text" v-model="nombre" placeholder="Nombre:" required
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>
            <div>
              <label for="edad">Edad</label>
              <input type="number" min="1" max="60" v-model="edad" placeholder="Edad" required
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>
            <div>
              <label for="ciudad">Ciudad</label>
              <input type="text" v-model="ciudad" placeholder="Ciudad" required
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>
            <div>
              <div class="mb-4">
                <label for="pregunta">¿Te has portado bien este año?</label>
                <input type="text" v-model="pregunta" placeholder=" Respuesta" required
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
           
              </div>
              
  
              
            </div>
  
            <div class="mt-7">
              <button type="submit" @click=" guardarpersonInfo() "
                class="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Entrar
              </button>
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
<catalogoFamily :persona="persona"/>
  
  </div>
  
</template>


<script>
import catalogoFamily from './catalogoFamily.vue'

export default {
  name: 'UserView',
  components: {
    catalogoFamily,  
  },

  data(){
    return {
    nombre:"",
    edad:"",
    ciudad:"",
    pregunta:"",
    persona:"",
    }
  },

  props: {    
  },
   methods:{

     guardarpersonInfo(){      
      this.persona = {                           // creo la persona en una variable //crear el objeto//
        nombre: this.nombre,
        edad: this.edad,
        ciudad: this.ciudad,
      }
      console.log(this.persona)

    },
  
  } 

}
</script>

