import logo from "../../logo.svg";
import "./estilo.css";
const Navbar = () => {
  return (
    <div className="navBar-container">
      <img width={"90px"} src={logo} alt="logo" />
      <div>
        <h2>Tijuana Record Shop</h2>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Catalogo</a>
          </li>
          <li>
            <a href="#">Carrito</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
