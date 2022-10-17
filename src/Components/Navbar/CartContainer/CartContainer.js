import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import "../CartContainer/CartEstilo.css";
import { Link } from "react-router-dom";
import { db } from "../../../Utils/Firebase";
import { collection, addDoc } from "firebase/firestore";
import TickLogo from "../CartContainer/tick.png";

const CartContainer = () => {
  const { DiscosEnCarrito, RemoverDisco, ClearCarrito, TotalCarrito, ElDate } =
    useContext(CartContext);
  const [idOrden, setIdOrden] = useState();
  const [ClickModal, setClickModal] = useState(false);

  const sendOrder = (event) => {
    event.preventDefault();
    const orden = {
      Buyer: {
        name: event.target[0].value,
        phone: event.target[1].value,
        email: event.target[2].value,
      },
      Discos: DiscosEnCarrito,
      Fecha: ElDate(),
      Total: TotalCarrito(),
    };

    const queryReq = collection(db, "ordenes");
    addDoc(queryReq, orden).then((response) => {
      setIdOrden(response.id);
      ClearCarrito();
    });
  };

  return (
    <div className="Carrito">
      {idOrden ? (
        <>
          <div className="PopCompra">
            <img src={TickLogo} alt="tick" />
            <p className="compra">Su orden fue realizada bajo el numero:</p>
            <p className="IdCompra">{idOrden}</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button>Ir al catalogo</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="CarritoBody">
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
                <button
                  className="ComprarBoton"
                  onClick={() => setClickModal(!ClickModal)}
                >
                  COMPRAR
                </button>
                <button className="VaciarCarrito" onClick={ClearCarrito}>
                  Vaciar carrito
                </button>
              </div>
              {ClickModal && (
                <div className="EstiloForm">
                  <form className="ModalCompra" onSubmit={sendOrder}>
                    <button
                      className="CerrarModal"
                      onClick={() => setClickModal(!ClickModal)}
                    >
                      x
                    </button>
                    <div className="LoginForm">
                      <h2>Datos de la orden</h2>
                      <div className="FormElement">
                        <label for="text">Nombre</label>
                        <input type="text" placeholder="Ingresar nombre" />
                      </div>
                      <div className="FormElement">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Ingresar email" />
                      </div>
                      <div className="FormElement">
                        <label for="tel">Telefono</label>
                        <input type="tel" placeholder="Ingresar telefono" />
                      </div>
                      <div className="FormElement">
                        <button>Enviar orden</button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
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
      )}
    </div>
  );
};

export default CartContainer;
