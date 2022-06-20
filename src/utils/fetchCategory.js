import { productos } from "./productos";

const fetchCategory = (category) => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.filter(producto => producto.category === category)); 
      reject(new Error('Hubo un error al buscar la categoría')); 
    }, 2000)
  })
} 


export { fetchCategory }; 