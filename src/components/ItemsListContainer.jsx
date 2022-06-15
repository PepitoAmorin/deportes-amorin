import { ItemCount } from './ItemCount'; 

export const ItemsListContainer = ({placeholder}) => 
<section>
  <h1>{placeholder}</h1>
  <ItemCount stock='15'/>
</section>