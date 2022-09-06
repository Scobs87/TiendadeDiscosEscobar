import Item from "./Item";
import "./ItemListContainer.css";

const ItemList = ({ ListaDeDiscos }) => {
  return (
    <>
      <div className="Albums">
        {ListaDeDiscos.map((disco) => {
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

export default ItemList;
