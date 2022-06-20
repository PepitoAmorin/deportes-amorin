import { Link } from "react-router-dom"; 

export const Item = ({ title, price, itemUrl, id }) => 
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
  <Link to={`/productos/${id}`}>Ver más</Link>
</article>