<template>
    <div class="min-h-[60vh]">
        <div class="flex justify-center">
            <form class="text-white font-yellowtail text-xl">
                <label class="mr-4">¿Qué pelicula quieres ver?</label>
                <input type="text" class="text-red-900 rounded-l-lg font-mono" v-model="userInput">
            </form>
            <button type="submit" v-on:click="ApiCall()" class="text-white bg-white rounded-r-lg"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red"
                    class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>

        <!-- <div id="response" v-for="movie in movies" :key=movie.name>
            <div class="flex ">
                <img v-bind:src="movie.image_url">
                <h4>{{ movie.name }}</h4>
            </div>
        </div> -->
        <section class="overflow-hidden text-white">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div class="flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/3" id="response" v-for="movie in movies" :key=movie.name>
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                v-bind:src="movie.image_url">
                        </div>
                        <div class="mb-6 px-2">
                            <h4 class="text-white font-opensans">{{ movie.name }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
<script>
export default {
    name: "peliculasComp.vue",
    data() {
        return {
            key: 'Mf3R4lVBK52jXRG9AbdBqa8BL5CxlFbWk97UzxX9',
            userInput: '',
            movies: [],
        }
    },

    methods: {

        ApiCall() {
            fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=${this.key}&search_value=${this.userInput}&search_type=1'`)
                .then(request => request.json())
                .then((response) => (
                    this.movies = response.results
                ))

                .catch((e) => (this.error = e))
        }
    }
}

</script>