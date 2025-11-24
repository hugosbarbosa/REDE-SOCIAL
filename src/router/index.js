import { createRouter , createWebHistory } from "vue-router";
//São usados para configurar e criar o roteador em uma aplicação Vue.js.

// Importa os componentes de visualização que serão associados às rotas.
import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Message from '../pages/message.vue';

// criar um array de objetos de rota, cada um definindo um caminho, um nome e o componente associado.
//path -> caminho da URL que acionará a rota
//component -> componente que será renderizado quando a rota for acessada


const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: Home 
  }, 
  { 
    path: "/message", 
    name: "Message", 
    component: Message 
  },
  { 
    path: "/about",   
    name: "About", 
    component: About 
  }
];
  // A pagina inicial sempre irá iniciar somente com o "/"
  // A pagina about será acessada com o "/about"
  // A pagina message será acessada com o "/message"

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;

