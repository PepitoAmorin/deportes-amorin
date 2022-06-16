import logo from '../assets/logo.png'; 
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
    <nav className='navbar'>
      <div className='left-navbar'> 
        <img src={logo} alt='logo de tienda de deportes'/>
        <span>Tienda de Deportes</span>
      </div>
      <div className='right-navbar'> 
        <a href="/#">Productos</a>
        <a href="/#">Buscar</a>
        <a href="/#">Contacto</a>
        <a href="/#">Mi cuenta</a> 
        <CartWidget />
      </div>
    </nav>
    </>

  )
}