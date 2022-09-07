import data from "./MockData";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";

const ItemDetailContainer = () => {
  const [DiscoDetalle, setDiscoDetalle] = useState([]);

  const getDisco = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getDisco.then((result) => {
      const FiltrarDisco = () => {
        return result.filter(result.index[2]);
      };

      setDiscoDetalle(result);
    });
  }, []);

  return (
    <>
      {DiscoDetalle.length > 0 ? (
        <div className="ContenedorDisco">
          <ItemDetail UnDisco={DiscoDetalle} />
        </div>
      ) : (
        <div className="Loader">Loading....</div>
      )}
    </>
  );
};

export default ItemDetailContainer;
