import { ItemList } from './ItemList'; 
import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/fetchProducts';
import { fetchCategory } from '../utils/fetchCategory';
import { useParams } from 'react-router-dom'; 

export const ItemsListContainer = () => {

  const [products, setProducts] = useState( [] ); 
  const { category } = useParams(); 

  useEffect(() => { 
    if (category) {
      fetchCategory(category)
      .then(res => setProducts(res)) 
      .catch((error) => {
        console.error(error) 
      })
    } else {
      fetchProducts()
      .then(res => setProducts(res))
      .catch((error) => {
        console.error(error) 
      })
    }
  }) 
    
  return (
    <section className='items-list-container'>
      {
        products.length === 0 ? 
           <h1> Cargando... </h1> 
           :  
          <ItemList productos = { products } /> 
      }
      
    </section> 
  ) 
}
