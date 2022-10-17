import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [DiscosEnCarrito, setDiscosEnCarrito] = useState([]);

  const IsInCart = (discoId) => {
    const DiscoExiste = DiscosEnCarrito.some((disco) => disco.id === discoId);
    return DiscoExiste;
  };

  const addDisco = (disco, cantidad) => {
    console.log(disco, cantidad);
    const NuevoDisco = {
      ...disco,
      cantidad,
    };

    if (IsInCart(disco.id)) {
      const DiscoPos = DiscosEnCarrito.findIndex(
        (Undisco) => Undisco.id === disco.id
      );
      const ListaCarrito = [...DiscosEnCarrito];
      ListaCarrito[DiscoPos].cantidad =
        ListaCarrito[DiscoPos].cantidad + cantidad;
      ListaCarrito[DiscoPos].PrecioCantidad =
        ListaCarrito[DiscoPos].cantidad * ListaCarrito[DiscoPos].precio;

      setDiscosEnCarrito(ListaCarrito);
    } else {
      const ListaCarrito = [...DiscosEnCarrito];
      NuevoDisco.PrecioCantidad = NuevoDisco.cantidad * NuevoDisco.precio;
      ListaCarrito.push(NuevoDisco);
      setDiscosEnCarrito(ListaCarrito);
    }
  };

  const RemoverDisco = (discoId) => {
    console.log(discoId);
    const ListaCarrito = DiscosEnCarrito.filter(
      (album) => album.id !== discoId
    );
    setDiscosEnCarrito(ListaCarrito);
  };

  const ClearCarrito = () => {
    setDiscosEnCarrito([]);
  };

  const TotalCarrito = () => {
    const getTotal = DiscosEnCarrito.reduce(
      (acc, disco) => acc + disco.PrecioCantidad,
      0
    );
    return getTotal;
  };

  const CartWidgetCounter = () => {
    const getTotalWidget = DiscosEnCarrito.reduce(
      (acc, disco) => acc + disco.cantidad,
      0
    );
    return getTotalWidget > 0 ? getTotalWidget : null;
  };

  const ElDate = () => {
    const showDate = new Date();
    const displayTodaysDate =
      showDate.getDate() +
      "/" +
      (showDate.getMonth() + 1) +
      "/" +
      showDate.getFullYear();
    return displayTodaysDate;
  };

  return (
    <CartContext.Provider
      value={{
        DiscosEnCarrito,
        addDisco,
        RemoverDisco,
        ClearCarrito,
        IsInCart,
        TotalCarrito,
        CartWidgetCounter,
        ElDate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
