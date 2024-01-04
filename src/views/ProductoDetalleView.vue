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
    
    <div class="py-8 text-gray-900">
        <div class="max-w-fullxl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="h-[500px] w-[500px] rounded-lg bg-gray-300 mb-4">
                        <img class="w-full h-full object-cover" :src=" productoSeleccionado ? 'http://mistiwasi.test/' + productoSeleccionado.img : 'Producto no encontrado' " alt="Product Image">
                    </div>
                    <div class="flex -mx-2 mb-4 justify-center">
                        <div class="w-1/2 px-2">
                            <button class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                            @click="handleAdd({producto_id: productoSeleccionado.id, nombre: productoSeleccionado.nombre, cantidad: 1, precio: Number.parseFloat(productoSeleccionado.precio), img: ('http://mistiwasi.test/' + productoSeleccionado.img), stock: productoSeleccionado.stock})">Añadir al carrito</button>
                        </div>
                        
                    </div>
                </div>
                <div class="md:flex-1 px-4">
                    <h1 style="color: blueviolet;">{{ id }}</h1>
                    <h2 class="text-2xl font-bold mb-2">{{ productoSeleccionado ? productoSeleccionado.nombre : 'Producto no encontrado' }}</h2>
                    <!-- <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                        ante justo. Integer euismod libero id mauris malesuada tincidunt.</p> -->
                    <div class="flex mb-1">
                        <div class="mr-4">
                            <span class="font-bold text-gray-700">Colección: </span>
                            <span class="text-gray-600">Friendship</span>
                        </div>
                        <div>
                            <span class="font-bold text-gray-700">Gramaje: </span>
                            <span class="text-gray-600">{{ productoSeleccionado ? productoSeleccionado.gramos : 'Producto no encontrado' }}</span>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <div class="mr-4">
                            <span class="font-bold text-gray-700">Precio: </span>
                            <span class="text-gray-600">{{productoSeleccionado ? productoSeleccionado.precio : 'Producto no encontrado'}} S/.</span>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>

    <!--FOOTER-->
    <!-- <footer class="text-gray-600 body-font bg-black mt-3">
        <div class="mx-auto w-full max-w-screen-xl">
            <div class="px-4 py-6 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center">© 2023 Rosalía Reynaga. All Rights
                    Reserved.
                </span>
                <div class="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                    <a href="#" class="text-purple-400 hover:text-purple-700">
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 8 19">
                            <path fill-rule="evenodd"
                                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Facebook page</span>
                    </a>
                    <a href="#" class="text-purple-400 hover:text-purple-700 ">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                        </svg>
                        <span class="sr-only">Instagram</span>
                    </a>

                    <a href="#" class="text-purple-400 hover:text-purple-700">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" />
                        </svg>
                        <span class="sr-only">Whatsapp</span>
                    </a>

                </div>
            </div>
        </div>
    </footer> -->
</template>

<style>

</style>

<script setup>
    import { defineProps, ref, onMounted } from "vue";
    import { store } from "./store.js";
    import { useRoute, RouterLink} from "vue-router";
    const { params } = useRoute()
    console.log(params.id);
    const props = defineProps(["id","tipoCliente"]);
    const iD = ref('');
    const productoSeleccionado = ref(null);

    onMounted(() => {
    iD.value=params.id;

    fetch('http://127.0.0.1:8000/api/productos') 
        .then((res) => res.json())
        .then((data) => {
        productoSeleccionado.value = data.find((producto) => producto.id === Number(iD.value));
        })
        .catch((error) => console.error("Error al cargar datos", error));
    });
    
    const handleAdd = (o)=>{
        store.increment(o)
    }
</script>