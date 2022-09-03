// import logo from "../../logo.svg";
import logo from "../Navbar/Logo/LogoVinyl.png";
import "./estilo.css";
import CartWidget from "./CartWidget/CartWidget";
const Navbar = () => {
  return (
    <div className="navBar-container">
      <a href="#">
        <img width={"60vh"} src={logo} alt="logo" />
      </a>
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
