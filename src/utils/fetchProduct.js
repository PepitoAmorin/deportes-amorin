import { productos } from "./productos";

const fetchProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.find(producto => producto.id === id)); 
      reject(new Error('Hubo un error al buscar el producto'));
    }, 2000)
  }) 
} 

export { fetchProduct }; 