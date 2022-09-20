import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "../CartContainer/CartEstilo.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { DiscosEnCarrito, RemoverDisco, ClearCarrito, TotalCarrito } =
    useContext(CartContext);

  return (
    <div className="Carrito">
      {DiscosEnCarrito.length > 0 ? (
        <>
          <table>
            <tr>
              <th>#</th>
              <th>Cover</th>
              <th>Album</th>
              <th>Artista</th>
              <th>Genero</th>
              <th>Precio</th>
              <th>Precio Total</th>
              <th>Cantidad</th>
            </tr>
            {DiscosEnCarrito.map((item) => (
              <>
                <tr>
                  <td></td>
                  <td>
                    <img
                      className="ElCover"
                      src={item.cover}
                      alt={item.artista}
                    />
                  </td>
                  <td>{item.album}</td>
                  <td>{item.artista}</td>
                  <td>{item.genero}</td>
                  <td>${item.precio} mxn</td>
                  <td>${item.PrecioCantidad} mxn</td>
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
          <div className="Botones">
            <h2>TOTAL: ${TotalCarrito()} mxn</h2>
            <button className="VaciarCarrito" onClick={ClearCarrito}>
              Vaciar carrito
            </button>
          </div>
        </>
      ) : (
        <div className="SinCarrito">
          <h2>No hay discos en el carrito</h2>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h5>Ir al catalogo</h5>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
