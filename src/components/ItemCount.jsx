import { useState } from "react";

export const ItemCount = ({stock}) => { 
  
  const [counter, setCounter] = useState(1);  

  //setear a 0 si no hay stock. 
  // useEffect(() => { 
  //   if ( stock === 0) {
  //     setCounter(0)
  //   } else {
  //     setCounter(1)
  //   }
  // }, [])

 
  // agregar un producto. 
  const increase = () => {
    setCounter(counter => counter + 1);
  };
 
  // sacar un producto. 
  const decrease = () => {
    setCounter(counter => counter - 1);
  };
 
  return (
    <div className="contador">
      
      { stock > 0 ? 
        <p className='con-stock'>(quedan sólo: {stock})</p> : 
        <p className='sin-stock'>No quedan más por el momento </p>  
      }
  
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
          disabled={counter >= stock || stock === 0}
        >
          +
        </button>
      </div>
    </div>
  );
}