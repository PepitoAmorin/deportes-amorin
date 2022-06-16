import { ItemCount } from './ItemCount'; 

export const ItemDetail = ( {producto} ) => { 

  return (
    <article className="item-page">
      <div className="image-container">
        <img 
          className="item-page__product-image" 
          src={producto.itemUrl} alt={producto.title}
        />
      </div> 
      <section className='item-page__product-details'>
        <div className="item-page__product-name">
          {producto.title}
        </div> 
        <div className="item-page__product-price"> 
          ${producto.price}.00
        </div> 
        <ItemCount stock={producto.stock}/>
      </section>
    </article>
  )}