import { ItemList } from './ItemList'; 
import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/fetchProducts';

export const ItemsListContainer = () => {

  const [products, setProducts] = useState( [] ); 

  useEffect(() => {
    fetchProducts().then(res => setProducts(res))
  }, [])

  return (
    <section className='items-list-container'>
      {
        products.length == 0 ? <h1> Cargando... </h1> : <ItemList productos={products} /> 
      }
      
    </section> 
  ) 
}
