import { useState } from "react";

export const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1); 
 
  // agregar un producto. 
  const increase = () => {
    setCounter(q => q + 1);
  };
 
  // sacar un producto. 
  const decrease = () => {
    setCounter(q => q - 1);
  };
 
  return (
    <div className="contador">
      <p>Camisa Tiger</p> 
      <p>(quedan sólo: {stock})</p>
      <div className="botones__container">
        <button 
          className="boton" 
          onClick={decrease} 
          disabled={counter <= 0}
        >
          -
        </button>
        <span className="contador_numero">{counter}</span>
        <button 
          className="boton" 
          onClick={increase} 
          disabled={counter >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
}