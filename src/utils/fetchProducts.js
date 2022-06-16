import { productos } from "./productos";

const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  }) 
} 

export { fetchProducts }; 