<template>
  <div class="grid grid-cols-6  ">
    <!-- columna uno -->
    <div class="font-sans  col-span-2 ">
      <div class="relative min-h-screen flex flex-col sm:justify-center items-center  ">
        <div class="relative sm:max-w-sm w-full">
          <div class="card bg-green-700 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div class="card bg-yellow-600 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>

          <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-200 shadow-md">
            <label for="" class="block mt-3 text-2xl text-gray-700 text-center font-yellowtail">
              Agregar Regalos de Navidad
            </label>

            <div class="mt-10 font-mono">
              <div>
                <label for="title">Nombre:</label>
                <input type="text" v-model="title" name="title" placeholder="Nombre:" required
                  class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              </div>

              <div>
                <label for="UrlImage">Url Image</label>
                <input type="url" v-model="image" name="url" placeholder="https://example.com" pattern="https://.*"
                  required
                  class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              </div>

              <div>
                <div class="mb-4">
                  <label for="description">Descripción</label>
                  <textarea v-model="description" type="text" id="input-description" name="description"
                    placeholder="Description" required
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"></textarea>

                </div>
              </div>

              <div class="mb-4" v-show="validatioForm">
                <span class="text-red-900">** Todos los campos son Obligatorios</span>
              </div>


              <div class="mt-7 ">
                <button type="button" @click="guardar()"
                  class="bg-green-700 w-full py-3 rounded-xl  shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="white" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>



              <div class="flex mt-7 items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md">
                <label class="block font-medium font-yellowtail text-sm text-gray-600 w-full">
                  Feliz Navidad
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md">
              </div>


            </div>

          </div>

        </div>
      </div>
    </div>
    <!-- columna dos -->
    <div class="font-sans  col-span-4  mr-10">

      <div class="grid grid-cols-4  ">

        <div class="rounded col-span1 h-96 bg-nieve  bg-no-repeat bg-contain">
          <!-- muñeco de nieve -->
        </div>

        <div
          class="col-span-3 relative sm:justify-center text-white text-4xl font-yellowtail border border-white border-4 bg-slate-50/20 rounded mt-10 rounded-xl drop-shadow-2xl  ">


          <div class="grid grid-cols-2 p-8 font-mono rounded  " v-show="showImage">

            <div class="col-span-1  p-2 md:p-4 grid justify-items-end ">
              <img :src=projectShow.image class="h-64 w-64 rounded border border-red-900 hover:border-yellow-600">
            </div>

            <div class="col-span-1  p-1 md:p-4 grid justify-items-end flex flex-col text-white">

              <div class=" w-full p-1 md:p-4" id="ptitle">Nombre: {{ projectShow.title }}</div>

              <div class="w-full p-1 md:p-4" id="pdescription">Descripción: {{ projectShow.description }}</div>

            </div>

          </div>


          <section class="overflow-hidden text-white col-span-1 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">

              <div class="flex flex-wrap -m-1 md:-m-2">
                <!-- div padre existente -->
                <div class="flex flex-wrap w-1/3 " v-for="(project, index) in projects" :key="project.image">
                  <div class="h-64 w-48 p-1 md:p-2">
                    <!--  div hijos que debo añadir las veces de la lista -->
                    <img :src=project.image @click="descripciondeImagen(index)"
                      class=" rounded border border-4 border-red-900 hover:border-yellow-600 " alt="gallery"
                      id="AddImage ">
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "AdminView",
  props: [

  ],


  data() {
    return {
      title: "",
      image: "",
      description: "",
      projectShow: "",
      showImage: false,
      validatioForm: false

    };
  },
  computed: {
    projects() {
      return this.$allProjects
    }
  },

  methods: {
    guardar() {
      if (this.title && this.image && this.description) {
        const project = {                           // creo el proyecto en una variable //crear el objeto//
          title: this.title,
          image: this.image,
          description: this.description,
        }
        this.$allProjects.push(project),
          this.title = "",
          this.image = "",
          this.description = ""
        this.validatioForm = false
      } else {
        this.validatioForm = true
      }


    },

    descripciondeImagen(index) {
      this.projectShow = this.$allProjects[index]
      this.showImage = true

    }
  },
}

</script>
    
  

 