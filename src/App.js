import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './sass/app.scss';
import { NavBar } from './components/NavBar'; 
import { ItemsListContainer } from './components/ItemsListContainer'; 
import { ItemDetailContainer } from './components/ItemDetailContainer'; 
import { NotFound } from "./components/NotFound";



function App() { 
  return (
   <>
    <BrowserRouter>
    <NavBar />
      <Routes> 
        <Route path='/' element={<ItemsListContainer />} /> 
        <Route path='/productos' element={<ItemsListContainer />} /> 
          <Route path='/productos/:id' element={<ItemDetailContainer />} /> 
          <Route path='/categoria/:category' element={<ItemsListContainer />} /> 

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
   </> 
  )
}

export default App;
