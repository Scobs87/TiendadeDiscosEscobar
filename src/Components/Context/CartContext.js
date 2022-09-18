import React, { children, useState } from "react";

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
      setDiscosEnCarrito(ListaCarrito);
    } else {
      const ListaCarrito = [...DiscosEnCarrito];
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

  return (
    <CartContext.Provider
      value={{
        DiscosEnCarrito,
        addDisco,
        RemoverDisco,
        ClearCarrito,
        IsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
