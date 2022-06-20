import { ItemDetail } from './ItemDetail'; 
import { useState, useEffect } from 'react';
import { fetchProduct } from '../utils/fetchProduct';
import { useParams } from 'react-router-dom'; 


const ItemDetailContainer = () => { 
  const [product, setProduct] = useState();  

  const { id } = useParams(); 
  
  useEffect(() => {
    fetchProduct(parseInt(id)) 
      .then(res => setProduct(res))
      .catch((error) => {
        console.error(error) 
      })
  }, [id]) 

  return (
    <section className='item-page-container'>
        { product ? <ItemDetail producto = { product } /> : <h1> Cargando... </h1> } 
    </section> 
  ) 
} 

export { ItemDetailContainer }; 