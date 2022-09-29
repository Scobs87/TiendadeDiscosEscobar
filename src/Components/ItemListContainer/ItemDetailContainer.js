import data from "./MockData";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../Utils/Firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [DiscoDetalle, setDiscoDetalle] = useState([]);
  const { detalleId } = useParams();

  useEffect(() => {
    const getAlbum = async () => {
      const getQuery = doc(db, "discos", detalleId);
      const response = await getDoc(getQuery);
      const nuevoAlbum = {
        id: response.id,
        ...response.data(),
      };
      console.log(nuevoAlbum);
      setDiscoDetalle(nuevoAlbum);
    };
    getAlbum();
  }, [detalleId]);

  return (
    <>
      {DiscoDetalle ? (
        <div className="ContenedorDisco">
          <ItemDetail
            TodoElDisco={DiscoDetalle}
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
