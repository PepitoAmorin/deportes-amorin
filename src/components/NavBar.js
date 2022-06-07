import logo from '../assets/logo.png'; 

export const NavBar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='left-navbar'> 
        <img src={logo} />
        <span>Tienda de Deportes</span>
      </div>
      <div className='right-navbar'> 
        <a href="/productos">Productos</a>
        <a href="/buscar">Buscar</a>
        <a href="/contacto">Contacto</a>
        <a href="/mi-cuenta">Mi cuenta</a>
      </div>
    </div>
    </>

  )
}