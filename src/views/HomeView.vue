<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted,ref } from 'vue';
import { store } from "./store.js";

import axios from 'axios';

const prods = ref([])
onMounted(
  () => {
    fetch("http://127.0.0.1:8000/api/productos")
    //fetch("https://276b-131-0-197-198.ngrok-free.app/api/productos")
    .then((res)=> res.json())
    .then((data)=> prods.value = data)
    .catch((err)=>console.log(err.message))

  } 
)
const handleAdd = (o)=>{
  store.increment(o)
}
</script>

<script>
const flowbiteScript = document.createElement('script');
flowbiteScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js';
document.head.appendChild(flowbiteScript);

const twElementsScript = document.createElement('script');
twElementsScript.src = 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js';
document.head.appendChild(twElementsScript);

const scriptModule = document.createElement('script');
scriptModule.type = 'module';
scriptModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.head.appendChild(scriptModule);

const scriptNomodule = document.createElement('script');
scriptNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.head.appendChild(scriptNomodule);
</script>
<template>
  
  <section class="flex items-center">
    <div class="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
      <div class="relative shadow-sm sm:rounded-lg">
        <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4 ">

          <div
            class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3 hover:text-purple-900 ">

            <RouterLink :to="{ name: 'carrito' }">
            
            <a>

              <button
                class="inline-flex items-center px-4 py-2  hover:bg-gray-300 text-gray-800 text-xl font-semibold rounded-md">
                <span class="h-9 w-9 mr-2">
                  <ion-icon name="cart-outline" aria-hidden="true" class="hover:text-purple-900 w-8 h-8"
                    viewBox="0 0 24 24"></ion-icon>
                </span>
                {{ store.itemsTotal }}
              </button>

            </a>
          </RouterLink>

          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- <p>En el carrito: {{ store.itemsTotal }}</p> -->
  <section class="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    
        <article class="bg-purple-300 p-4 pb-1 rounded" v-for="p in prods" :key="p.id"> 

          <RouterLink :to="{ name: 'productodetalle', params: { id: p.id } }">
            <img :src="'http://mistiwasi.test/' + p.img" alt="">
            <img :src="p.img" alt="" class="w-full rounded-t"> 
           </RouterLink>

            <div class="p-4">
              <RouterLink :to="{ name: 'productodetalle', params: { id: p.id } }">
                <h3 class="text-xl font-semibold text-gray-900">{{ p.nombre }}</h3>
              </RouterLink> 
                <p class="text-gray-600"> Stock: {{ p.stock }}</p>
            </div>
              
            <div class="flex justify-between items-center p-2 text-gray-900 ">
                <div class="price">Precio: {{ p.precio }} S/ </div>
                <button class="bg-purple-900 text-white font-semibold rounded-full px-4 py-2  hover:text-purple-900 hover:bg-white hover:font-semibold"
                        @click="handleAdd({producto_id: p.id, nombre: p.nombre, cantidad: 1, precio: Number.parseFloat(p.precio), img: ('http://mistiwasi.test/' + p.img), stock: p.stock})">Comprar</button>
            </div>
        </article>
    </section>

</template>
<style scoped>
.container{
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
}
.card{
  width: 100%;
  background: white;
  padding: 0.4rem;
  border-radius: 6px;
}
.card-img{
  width: 250px;
  height: 300px;
  border-radius: 6px 6px 0 0;
}
.card-img:hover{
  transform: scale(0.98);
}
.card-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  padding: 10px 20px;
  background-color: #250c6d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(33, 23, 174);
}
.button:active {
  background-color: rgb(60, 54, 237);
}
</style>



