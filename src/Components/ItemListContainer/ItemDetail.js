import Item from "./Item";
import "./ItemListContainer.css";

const ItemDetail = ({ UnDisco }) => {
  return (
    <>
      <div className="Albums">
        {UnDisco.map((disco) => {
          return (
            <Item
              key={disco.id}
              cover={disco.cover}
              artista={disco.artista}
              album={disco.album}
              genero={disco.genero}
              precio={disco.precio}
              stock={disco.stock}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemDetail;
