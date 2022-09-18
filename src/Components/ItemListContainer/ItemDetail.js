import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";
import { CartContext } from "../Context/CartContext";

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
  );
};

export default ItemDetail;
