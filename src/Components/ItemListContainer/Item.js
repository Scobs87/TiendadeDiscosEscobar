import "./ItemListContainer.css";
import { Link } from "react-router-dom";

const Item = ({
  id,
  artista,
  album,
  genero,
  precio,
  cover,
  stock,
  CardDetalle,
}) => {
  return (
    <div className="UnDisco">
      <Link to={`/Item/${CardDetalle.id}`}>
        <img src={cover} alt={artista} />
      </Link>
      <h1>{artista}</h1>
      <h2>{album}</h2>
      <h3>Genero: {genero}</h3>
      <p>Precio: ${precio} pesos</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default Item;
