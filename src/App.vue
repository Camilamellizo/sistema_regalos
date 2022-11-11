<template >
  <div id="app" class=" bg-fondo cursor-navidad">
    <div ><!-- class="bg-bolas bg-contain bg-no-repeat bg-right-top" -->
      <div class="pt-8">
        <!-- NAvBAR -->
        <ul class="flex list-none justify-center">
          <li class="font-yellowtail italic text-4xl text-white mr-4 border-4 border-transparent hover:border-b-white">
            <RouterLink to="Admin">Papá Noel</RouterLink>
          </li>
          <li class="text-4xl text-white">/</li>
          <li class="font-yellowtail italic text-4xl text-white ml-4 border-4 border-transparent hover:border-b-white">
            <RouterLink to="User">Familia</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <countDown />
      </div>
    </div>
    <hr class="mx-10 mt-4 border border-yellow-600">

    <!-- content -->
    <div class=" pt-8  ">
      <router-view></router-view>
    </div>    
   
  </div>
  <footer>
      <fooTer></fooTer>  
   
  </footer>
 
 
 
  

</template>

<script>
import '@/assets/tailwind.css';
import countDown from './components/countDown'
import fooTer from './components/fooTer.vue'


export default {
  name: 'App',
  components: {
    countDown,
    fooTer
  },
  data() {
    return {

    };
  },
  methods: {

  },

}
</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
