import logo from "../../logo.svg";
import "./estilo.css";
import CartWidget from "./CartWidget/CartWidget";
const Navbar = () => {
  return (
    <div className="navBar-container">
      <img width={"90px"} src={logo} alt="logo" />
      <div>
        <h2>TJ Record Shop</h2>
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
            <a href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
