import "./ItemListContainer.css";

const Item = ({ id, artista, album, genero, precio, cover, stock }) => {
  return (
    <div className="UnDisco">
      <img src={cover} alt={artista} />
      <h1>{artista}</h1>
      <h2>{album}</h2>
      <h3>Genero: {genero}</h3>
      <p>Precio: ${precio} pesos</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default Item;
