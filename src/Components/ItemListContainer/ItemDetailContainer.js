import data from "./MockData";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [DiscoDetalle, setDiscoDetalle] = useState([]);
  const { detalleId } = useParams();

  const getDisco = (identificador) => {
    return new Promise((resolve, reject) => {
      const disco = data.find(
        (UnDisco) => UnDisco.id === parseInt(identificador)
      );
      resolve(disco);
    });
  };

  useEffect(() => {
    const getAlbum = async () => {
      const UnAlbum = await getDisco(detalleId);
      setDiscoDetalle(UnAlbum);
    };
    getAlbum();
  }, [detalleId]);

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
