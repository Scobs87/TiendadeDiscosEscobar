import { useState } from "react";
import "./ItemListContainer.css";

const ItemCount = ({ stock, initial, AgregarCarrito }) => {
  const [contador, setContador] = useState(initial);
  const suma = () => {
    return contador < stock ? setContador(contador + 1) : setContador(initial);
  };

  const resta = () => {
    return contador > 1 ? setContador(contador - 1) : setContador(stock);
  };

  return (
    <>
      <p className="laCantidad">Cantidad</p>
      <div className="contadorDetalle">
        <div className="elContador">
          <div className="sumaResta">
            <button className="losBotones" onClick={suma}>
              +
            </button>
            <h3>{contador}</h3>
            <button className="losBotones" onClick={resta}>
              -
            </button>
          </div>
        </div>
      </div>
      <div className="botonCarrito">
        <button
          className="botonCarritoEstilo"
          onClick={() => AgregarCarrito(contador)}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
