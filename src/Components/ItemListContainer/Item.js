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
      <Link style={{ textDecoration: "none" }} to={`/Item/${CardDetalle.id}`}>
        <img src={cover} alt={artista} />
        <h1>{artista}</h1>
        <h3>{album}</h3>
        <h4>Genero: {genero}</h4>
        <h5>Precio: ${precio} pesos</h5>
        {/* <p>Stock: {stock}</p> */}
      </Link>
    </div>
  );
};

export default Item;
