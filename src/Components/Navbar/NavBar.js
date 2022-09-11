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
            <NavLink
              className={({ isActive }) =>
                isActive ? "ClaseActive" : "ClaseInactive"
              }
              to="/Login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "ClaseActive" : "ClaseInactive"
              }
              to="/Catalogo"
            >
              Catalogo
            </NavLink>
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
