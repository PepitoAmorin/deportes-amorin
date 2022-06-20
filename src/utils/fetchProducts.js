import { productos } from "./productos";

const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos); 
      reject(new Error('Hubo un error al cargar la página'));
    }, 2000)
  }) 
} 

export { fetchProducts }; 