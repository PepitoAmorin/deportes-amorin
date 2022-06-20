import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { CartWidget } from './CartWidget'; // react icons. 
import { FiMenu } from 'react-icons/fi'; // react icons. 

export const NavBar = () => { 

  const subMenuItems = ['camisetas', 'shorts', 'pelotas', 'championes'];

  const [navExpanded, setNavExpanded] = useState(false)
  const [subNavExpanded, setSubNavExpanded] = useState(false) 

  // empieza sin navegación y subnavegación desplegada 
  useEffect(() => {
    setNavExpanded(false)
    setSubNavExpanded(false)
  }, []); 
 
  return (
    <>
    <nav className='navbar'>
      <div className='left-navbar'> 
        <img src={logo} alt='logo de tienda de deportes'/>
        <Link 
          to='/' 
          onClick={() => {setNavExpanded(false)}}
        >
          Tienda de Fútbol
        </Link>
      </div>
      <button 
        className='hamburger-menu' 
        onClick={() => {setNavExpanded(!navExpanded)}}
      >
        <FiMenu />
      </button>
      <div className= {navExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul className='navigation'> 
          <li 
            onClick={() => {setSubNavExpanded(!subNavExpanded)}}>Productos</li> 
          {/* mapeo de todos los items del submenu */}
          <div className='submenu'>
          {subMenuItems.map(item => 
            <li key={item} className={subNavExpanded ? 'submenu-expanded' : 'submenu-hidden'}>
              <Link to={`/categoria/${item}`} 
                onClick={() => {
                  setNavExpanded(!navExpanded); 
                  setSubNavExpanded(!subNavExpanded); 
                }}
              >
                {item}
              </Link>
            </li>

            )} 
          </div>
          <li><Link to='/#' onClick={() => {setNavExpanded(!navExpanded)}}>Buscar</Link></li>
          <li><Link to='/#'>Contacto</Link></li>
          <li><Link to='/#'>Mi Cuenta</Link></li> 
        </ul>
      </div>
      <CartWidget />
    </nav>
    </>

  )
} 