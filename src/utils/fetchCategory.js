import { productos } from "./productos";

const fetchCategory = (category) => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.filter(producto => producto.category === category)); 
    }, 2000)
  })
} 


export { fetchCategory }; 