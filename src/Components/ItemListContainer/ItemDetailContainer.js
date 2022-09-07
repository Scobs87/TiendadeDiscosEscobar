import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";

const ItemDetailContainer = () => {
  const [DiscoDetalle, setDiscoDetalle] = useState([]);

  const getDisco = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 3,
        artista: "The Strokes",
        album: "Room On Fire",
        genero: "Rock Alternativo",
        precio: 350,
        cover:
          "https://i.scdn.co/image/ab67616d0000b2730f35726025e0f025da4c688f",
        stock: 15,
      });
    }, 2000);
  });

  useEffect(() => {
    getDisco.then((result) => {
      setDiscoDetalle(result);
    });
  }, []);

  return (
    <>
      {DiscoDetalle ? (
        <div className="ContenedorDisco">
          <ItemDetail
            cover={DiscoDetalle.cover}
            artista={DiscoDetalle.artista}
            album={DiscoDetalle.album}
            genero={DiscoDetalle.genero}
            precio={DiscoDetalle.precio}
            stock={DiscoDetalle.stock}
          />
        </div>
      ) : (
        <div className="Loader">Loading....</div>
      )}
    </>
  );
};

export default ItemDetailContainer;
