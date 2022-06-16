import { ItemDetail } from './ItemDetail'; 
import { useState, useEffect } from 'react';
import { fetchProduct } from '../utils/fetchProduct';

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState(); 

  useEffect(() => {
    fetchProduct(2)
      .then(res => setProduct(res))
  }, []) 

  return (
    <section className='item-page-container'>
        { !product ? <h1> Cargando... </h1> : <ItemDetail producto = { product } /> }
         
    </section> 
  ) 
}