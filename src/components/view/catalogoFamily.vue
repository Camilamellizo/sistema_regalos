<template>
<div class="font-mono text-xl text-white">
  <nav class="bg-amber-500 text-white font-mono border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 mb-2 mx-10 rounded">
    <div class=" flex flex-wrap justify-between items-center mx-auto ">
      <span class="self-center text-2xl whitespace-nowrap dark:text-white pl-8">Hola</span>
      <div class="flex items-center md:order-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10 mr-8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </div>
  </nav>
  <!-- parte 2 galeria de imagenes  -->
  <section class="overflow-hidden bg-red-600 mx-10 rounded">
    <div class="container px-5 py-2 mx-auto lg:pt-4 lg:px-20">
      <div class="flex flex-wrap -m-1 md:-m-2">

        <div class="flex flex-wrap w-1/4">
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
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
      <div class="bg-amber-500 rounded ">
        <span>En este apartado encontraras todas las opciones que tienes para esta navidad<br>
 puedes escoger 4 de estas imágenes para enviar en tu carta a Papá Noel.

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
          class="bg-amber-500  px-3 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
          <RouterLink to="/">Enviar Carta</RouterLink>
        </button>
      </div>
    </div>

    <!-- columna 2 -->

    <div class="col-span-1  flex flex-col">
      <!-- fila 1 api weather-->
      <div class="mb-4 ">
        <div class="bg-amber-500 rounded h-12 rounded pt-2">
          <span>El Clima en Rovaniemi (Finlandia)</span>
        </div>
        <div class="bg-red-600 rounded h-32">
          <span>api weather</span>
        </div>
      </div>
      <!-- fila 2 api-peliculas -->
      <div class=" ">
        <div class="bg-amber-500 rounded h-12 rounded pt-2">
          <span>Peliculas Navideñas</span>
        </div>
        <div class="bg-red-600 rounded h-32 ">
          <span> api Peliculas Navideñas</span>
        </div>
      </div>
      <div class="rounded mt-2">
        <button type="submit"
          class="bg-amber-500  px-3 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
          <RouterLink to="/">volver</RouterLink>
        </button>
      </div>
    </div>



  </div>
</div>

</template>
      
<script>
export default {
    name: "catalogoFamily",
    props: [
            'allProjects',
            'persona'
    ],

        data() {
    return {

    title: "",
    image: "",
    description: "",
    nombre:"",
    edad:"",
    ciudad:"",
    
    }
  },
 methods:{

 }
}

</script>  
