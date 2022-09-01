import { useState } from "react";
import "./ItemListContainer.css";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(initial);
  const suma = () => {
    return contador < stock ? setContador(contador + 1) : setContador(initial);
  };

  const resta = () => {
    return contador > 1 ? setContador(contador - 1) : setContador(stock);
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
