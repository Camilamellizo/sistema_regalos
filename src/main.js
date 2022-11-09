import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {routes} from "./routes.js"
// importar archivo de rutas


import {createRouter, createWebHashHistory} from "vue-router";
const app = createApp(App);
app.config.globalProperties.$allProjects = []
app.config.globalProperties.$user = ""


const routers=createRouter ({
    history: createWebHashHistory(),
    routes,
})
app.use(routers);
app.mount('#app')

//createApp(App).mount('#app')
