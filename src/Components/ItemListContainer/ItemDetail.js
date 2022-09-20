import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({
  cover,
  artista,
  album,
  genero,
  precio,
  stock,
  TodoElDisco,
}) => {
  const { addDisco } = useContext(CartContext);
  const [GuardandoContador, setGuardandoContador] = useState(0);

  const onAdd = (data) => {
    console.log(data);
    setGuardandoContador(data);
    addDisco(TodoElDisco, data);
  };

  return (
    <>
      <div className="UnAlbum">
        <img src={cover} alt={artista} />
        <h1>{artista}</h1>
        <h2>{album}</h2>
        <h3>Genero: {genero}</h3>
        <p>Precio: ${precio} pesos</p>
        <p>Stock: {stock}</p>
        <h4>{GuardandoContador}</h4>
        <ItemCount stock={10} initial={1} AgregarCarrito={onAdd} />
      </div>

      {GuardandoContador > 0 && (
        <div className="IrAlCarrito">
          <Link to="/cart">
            <button>Ir al carrito</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
