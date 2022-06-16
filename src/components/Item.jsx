export const Item = ({ title, price, itemUrl}) => 
<article className="product-card">
  <div className="product-card__product-name">
    {title}
  </div> 
  <div className="image-container">
    <img 
      className="product-card__product-image" 
      src={itemUrl}  alt={title}
    />
  </div>
  <div className="product-card__product-price"> 
    ${price}.00
  </div> 
  <button>Ver más</button>
</article>