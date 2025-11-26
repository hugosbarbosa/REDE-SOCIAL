<script setup>
import { ref } from "vue";
//ref() Cria variaveis reativas.

const likes = ref(0);
const texto = ref("");

// lista de comentarios

const comentarios = ref([]);

const mostrarComentarios = ref(false);

</script>

<template>
    <h1>Bem vindo ao feed</h1>

    <section class="post">

        <img src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2025/11/25113246/588440098_17855439024566503_7912492923993265772_n-620x620.jpeg" alt="Imagem da postagem GracyOvos">

        <div>
            <button @click="likes++" v-if="likes >= 1 ">{{ likes }}❤️ </button>
            <button @click="likes++" v-else="likes =0 ">Curtir❤️ </button>
            
           <p v-if="likes >= 10"> Esse post está ficando famoso!</p>

        </div>

        <!-- v-show mostra ou esconde do html -->

        <div  class="comentarios">
            <h4>Comentários</h4>

                        <!-- "C" é o comentario
                    "I" é o indice -->

             <p v-for="(c, i) in comentarios" :key="i"> {{ c }}</p>
             
            <!-- Campo de comentarios -->
             <!-- v-model faz a ligação entre o input e a variavel de texto -->
            
             <input v-model="texto" type="text" placeholder="Deixe seu comentário" />
             <button @click="comentarios.push(texto)">Enviar</button>


            
        </div>

    </section>

</template>

<style scoped>

img {
    width: 30vw;
    border-radius: 8px;
}


</style>