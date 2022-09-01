import { useState } from "react";
import "./ItemListContainer.css";

const ItemCount = () => {
  const [contador, setContador] = useState(0);
  const suma = () => {
    return contador < 10 ? setContador(contador + 1) : null;
  };

  const resta = () => {
    return contador > 0 ? setContador(contador - 1) : null;
  };

  return (
    <>
      <div className="elContador">
        <div>Contador</div>
        <h2>{contador}</h2>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
      </div>
      <div className="botonCarrito">
        <button>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
