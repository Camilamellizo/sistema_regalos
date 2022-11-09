//import catalogoFamily from "./components/view/catalogoFamily.vue";
//import App from "./App.vue";

export const routes = [
  { path: "/",
  name:"home",
  component: () => import("./components/view/homeComp.vue"),
},

  {
    path: "/catalogo",
    name: "catalogo",
    component: () => import("./components/view/catalogoFamily.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("./components/AdminView.vue"),
  },
  {
    path: "/User",
    name: "User",
    component: () => import("./components/UserView.vue"),
  },
  {
    path: "/carta",
    name: "carta",
    component: () => import("./components/view/listComp.vue"),
  },
  {
    path: "/peliculas",
    name: "peliculas",
    component: () => import("./components/view/peliculasComp.vue"),
  }
  
];
