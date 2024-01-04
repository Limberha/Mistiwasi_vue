//store.js
import { reactive } from 'vue'

export const store = reactive({
    count:[],
    costoTotal: 0,
    itemsTotal: 0,
    increment(obj){
        const objetoEncontrado = this.count.find(objeto => objeto.producto_id === obj.producto_id);
        if (objetoEncontrado) {
            if(objetoEncontrado.cantidad < objetoEncontrado.stock){
                objetoEncontrado.cantidad = objetoEncontrado.cantidad + 1;
                this.itemsTotal = this.itemsTotal + 1;
                this.incrementCostoTotal(objetoEncontrado.precio);
                console.log("Propiedad cantidad actualizada:", objetoEncontrado);
            }
            
        } else {
            this.count.push(obj);
            this.itemsTotal = this.itemsTotal + 1;
            this.incrementCostoTotal(obj.precio);
        }   
    },
    
    incrementCostoTotal(c){
        this.costoTotal = this.costoTotal + c;
    },
    sumCostoIndividual(objeto){
        this.costoTotal = this.costoTotal + objeto.precio;
        this.itemsTotal = this.itemsTotal + 1;
    },
    
    reducirCostoTotal(objeto){
        this.costoTotal = this.costoTotal - (objeto.cantidad * objeto.precio);
        this.itemsTotal = this.itemsTotal - objeto.cantidad;
    },

    reducirCostoIndividual(objeto){
        this.costoTotal = this.costoTotal - objeto.precio;
        this.itemsTotal = this.itemsTotal - 1;
    }
})