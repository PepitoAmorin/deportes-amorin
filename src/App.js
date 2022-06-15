import './sass/app.scss';
import { NavBar } from './components/NavBar'; 
import { ItemsListContainer } from './components/ItemsListContainer'; 

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemsListContainer placeholder='Acá van a ir todos los elementos'/> 
    </div>
  );
}

export default App;
