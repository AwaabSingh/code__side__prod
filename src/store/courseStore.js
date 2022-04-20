import { writable } from 'svelte/store'
import { getProducts } from '../Requests/courses'

const store = writable(getProducts())

// const setProducts = async () => {
//     let products = await getProducts()
    
//     if(products) {
//         store.set(products)
//     }
// }

export default store;