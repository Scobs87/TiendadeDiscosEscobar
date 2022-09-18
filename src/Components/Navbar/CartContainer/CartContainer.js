import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "../CartContainer/CartEstilo.css";

const CartContainer = () => {
  const { DiscosEnCarrito, RemoverDisco, ClearCarrito } =
    useContext(CartContext);

  return (
    <div className="Carrito">
      <table>
        <tr>
          <th>#</th>
          <th>Cover</th>
          <th>Album</th>
          <th>Artista</th>
          <th>Genero</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
        {DiscosEnCarrito.map((item) => (
          <>
            <tr>
              <td></td>
              <td>
                <img className="ElCover" src={item.cover} alt={item.artista} />
              </td>
              <td>{item.album}</td>
              <td>{item.artista}</td>
              <td>{item.genero}</td>
              <td>${item.precio}</td>
              <td>
                {item.cantidad}
                <button
                  onClick={() => RemoverDisco(item.id)}
                  className="Borrar"
                >
                  X
                </button>
              </td>
            </tr>
          </>
        ))}
      </table>
      <button className="VaciarCarrito" onClick={ClearCarrito}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default CartContainer;
