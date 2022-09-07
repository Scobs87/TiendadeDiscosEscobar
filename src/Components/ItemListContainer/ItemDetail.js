import "./ItemListContainer.css";

const ItemDetail = ({ cover, artista, album, genero, precio, stock }) => {
  return (
    <div className="UnAlbum">
      <img src={cover} alt={artista} />
      <h1>{artista}</h1>
      <h2>{album}</h2>
      <h3>Genero: {genero}</h3>
      <p>Precio: ${precio} pesos</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default ItemDetail;
