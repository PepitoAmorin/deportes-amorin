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
        <a href="/productos">Productos</a>
        <a href="/buscar">Buscar</a>
        <a href="/contacto">Contacto</a>
        <a href="/mi-cuenta">Mi cuenta</a> 
        <CartWidget />
      </div>
    </nav>
    </>

  )
}