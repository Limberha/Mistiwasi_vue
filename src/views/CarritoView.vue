<template>
    <body class="bg-gray-100 text-gray-900">
    <div class="h-screen pt-10">
        <h1 class="mb-3 text-center text-2xl font-bold">Items</h1>
        <div class="mx-4 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3" v-if="store.count.length">
                <div class="justify-between mb-3 rounded-lg bg-white p-3 shadow-md sm:flex sm:justify-start" v-for="p in store.count">
                    <img :src="p.img"
                        alt="product-image" class="w-1/3 rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">{{ p.nombre }}</h2>
                            <p class="mt-1 text-xs text-gray-700">{{ p.precio }} Bs</p>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center border-gray-100">
                                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100" @click="handleClickMenos(p)"> - </span>
                                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" readonly
                                  v-model="p.cantidad" />
                                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-1000" @click="handleClickMas(p)"> + </span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"  @click="remove(p); reducirCostoTotal(p)">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sub total -->
            <div class="mt-6 mx-3 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Subtotal</p>
                    <p class="text-gray-700">{{ store.costoTotal }}</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Total</p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">{{ store.costoTotal }}</p>
                    </div>
                </div>
                <button class="mt-6 w-full rounded-md bg-purple-500 py-1.5 font-medium text-white" @click="handleSale(), handlePrueba()">Enviar</button>
            </div>
        </div>
    </div>


</body>
  </template>
<script setup>
  import { ref } from 'vue';
  import { store } from './store';
  const prods = ref([]);
  
  const id = [];
  const precio = [];
  const cantidad = [];

  const strings = () =>{
    for(let i=0; i<store.count.length; i++){
      id.push(store.count[i].producto_id);
      precio.push(store.count[i].precio);
      cantidad.push(store.count[i].cantidad);
    }
  }
  
  

  const handleSale = ()=>{
    //console.log(store.count);
    const data = ref({
      fecha: new Date().toLocaleString(),
      detalle: store.count
    })
    //console.log(JSON.stringify(data));
    fetch("http://localhost:3000/ventas", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data.value)  
    })
    
  }

  const handlePrueba = ()=>{
    //console.log(store.count);
    strings();
    const dataS = ref({
      id: id,
      precio: precio,
      cantidad: cantidad
    })
    //console.log(JSON.stringify(dataS));
    fetch("http://127.0.0.1:8000/api/ventas/create", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dataS.value)
    })
  }

  const handleClickMenos = (p) => {
    if (p.cantidad > 1) {
      reduceCant(p);
      reducirCostoIndividual(p);
    }else{
      remove(p);
      reducirCostoTotal(p);
    }
  }
  const handleClickMas = (p) => {
    if (p.cantidad < p.stock) {
      incrementCant(p);
      sumCostoIndividual(p)
    }
  }

  const incrementCant = (o)=>{
      o.cantidad = o.cantidad + 1;
  }

  const reduceCant = (o)=>{
      o.cantidad = o.cantidad - 1;
  }

  const remove = (item)=>{
    store.count.splice(store.count.indexOf(item),1);
  }

  const sumCostoIndividual = (o)=>{
    store.sumCostoIndividual(o)
  }

  const reducirCostoTotal = (o)=>{
    store.reducirCostoTotal(o)
  }

  const reducirCostoIndividual = (o)=>{
    store.reducirCostoIndividual(o)
  }
  </script>
  
  <style>
    .tiposC{
      display: flex;
      flex-direction: row;
    }
    .productosC{
      margin-right: 20px;
      padding-right: 20px;
    }
  </style>
  
  