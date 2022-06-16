import { productos } from "./productos";

const fetchProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.find(producto => producto.id === id)); 
    }, 2000)
  }) 
} 

export { fetchProduct }; 