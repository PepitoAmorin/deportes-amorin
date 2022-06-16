import { Item } from "./Item"; 

export const ItemList = ({ productos }) => 
<>
  {productos.map(producto => 
    <Item 
      key= {producto.id} 
      title= {producto.title} 
      price= {producto.price} 
      itemUrl= {producto.itemUrl}
    />
  )}
</>