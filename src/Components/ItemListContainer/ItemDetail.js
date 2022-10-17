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
        <div className="elCover">
          <img src={cover} alt={artista} />
        </div>
        <div className="info">
          <h1 className="artista">{artista}</h1>
          <h2 className="album">{album}</h2>
          <h3 className="genero">
            Genero: <p className="estiloGenero">{genero}</p>
          </h3>
          <p className="precio">${precio}.00</p>
          {/* <p>Stock: {stock}</p> */}
          {/* <h4>{GuardandoContador}</h4> */}
          <ItemCount stock={10} initial={1} AgregarCarrito={onAdd} />
          {GuardandoContador > 0 && (
            <div className="IrAlCarrito">
              <Link style={{ textDecoration: "none" }} to="/cart">
                <button className="IrAlCarritoEstilo">Ir al carrito</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
