<template>
        <form class="text-white font-mono">
            <label class="mr-4">¿Qué pelicula quieres ver?</label>
            <input type="text" class="text-red-900 rounded font-mono" v-model="userInput">
        </form>
        <button type="submit" v-on:click="ApiCall()" class="text-white">Buscar</button>
        <div id="response" v-for="movie in movies" :key=movie.name>
            <div>
                <img v-bind:src="movie.image_url">
                <h4>{{ movie.name }}</h4>
            </div>
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