import './sass/app.scss';
import { NavBar } from './components/NavBar'; 
import { ItemsListContainer } from './components/ItemsListContainer'; 
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      {/* <ItemsListContainer />   */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
