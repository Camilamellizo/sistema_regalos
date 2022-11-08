<template >
  <div id="app" class="pt-8  ">

    <!-- NAvBAR -->
    <ul class="flex list-none justify-center">
      <li class="font-mono text-4xl text-white mr-4 border-4 border-transparent hover:border-b-white"><RouterLink to="Admin">Papá Noel</RouterLink></li>
      <li class="text-4xl text-white">/</li>
      <li class="font-mono text-4xl text-white ml-4 border-4 border-transparent hover:border-b-white"><RouterLink to="User">Familia</RouterLink></li>
    </ul>
    
    <!-- content -->
    <div class=" pt-8  ">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css';


export default {
  name: 'App',
  components: {
 
  },
  data() {
    return {
      isAdmin: false,
      isFamily:false,
      allProjects: [],                      //array donde se agregan los objetos
    };
  },
  methods: {
    addProject(project) {                   //recibe el proyecto y lo agrega a la array o lista
      this.allProjects.push(project); 
      console.log(this.allProjects)
    },
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
