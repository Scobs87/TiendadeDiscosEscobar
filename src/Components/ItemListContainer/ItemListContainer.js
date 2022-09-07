import data from "./MockData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((result) => {
      setItems(result);
      console.log(result);
    });
  }, []);

  return (
    <>
      {items.length > 0 ? (
        <div className="ContenedorCatalogo">
          <ItemList ListaDeDiscos={items} />
        </div>
      ) : (
        <div className="Loader">Loading....</div>
      )}
    </>
  );
};

export default ItemListContainer;
