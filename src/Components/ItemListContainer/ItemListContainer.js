import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

import { db } from "../../Utils/Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getQuery = !categoryId
      ? collection(db, "discos")
      : query(
          collection(db, "discos"),
          where("generoCategoryId", "==", categoryId)
        );

    getDocs(getQuery).then((response) => {
      const fireBaseData = response.docs.map((doc) => {
        const nuevoDisco = {
          id: doc.id,
          ...doc.data(),
        };
        return nuevoDisco;
      });
      setItems(fireBaseData);
    });
  }, [categoryId]);

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
