import logo from "../Navbar/Logo/LogoVinyl.png";
import "./estilo.css";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar-container">
      <NavLink to="/">
        <img width={"60vh"} src={logo} alt="logo" />
      </NavLink>
      <div>
        <h2>TJ Record Shop</h2>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Catalogo">Catalogo</NavLink>
          </li>
          <li>
            <NavLink to="/Cart">
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
