<template >
<div class="container bg-red-900 pt-8">
  <div>
  <button @click="isAdmin = true, isFamily= false" type="button" class="font-mono text-4xl text-white mr-4 border-4 border-red-900 hover:border-b-white">
    Papá Noel
  </button>
  <span class="text-4xl text-white">/</span>
  <button @click="isFamily = true, isAdmin=false" class="font-mono text-4xl  text-white ml-4 border-4 border-red-900 hover:border-b-white">
    Familia
  </button>
</div>  
<div class="container bg-red-900 pt-8">
<AdminView v-if="isAdmin" @createProject="addProject" :allProjects="allProjects"></AdminView>
<UserView v-if="isFamily"/>
</div>

</div>
  

</template>

<script>
import UserView from './components/UserView.vue'
import AdminView from './components/view/AdminView.vue'

import '@/assets/tailwind.css';

export default {
  name: 'App',
  components: {
    UserView,
    AdminView,    
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
