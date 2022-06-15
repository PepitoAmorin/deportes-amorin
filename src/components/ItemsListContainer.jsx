import { ItemCount } from './ItemCount'; 

export const ItemsListContainer = ({placeholder}) => 
<section className='items-list-container'>
  <h1>{placeholder}</h1>
  <ItemCount stock={9} initial={1}/>
</section>