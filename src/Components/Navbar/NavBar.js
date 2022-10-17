import { useState } from "react";
import logo from "../Navbar/Logo/LogoVinyl.png";
import "./estilo.css";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import Catalogo from "../Catalogo/Catalogo";
import Button from "./Boton/Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img className="elLogo" width={"60vh"} src={logo} alt="logo" />
        <p>TJ Record Shop</p>
      </NavLink>

      <div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="/Catalogo"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Catalogo <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown && <Catalogo />}
          </li>
          <li className="nav-item">
            <NavLink
              to="/Login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Cart" className="nav-links" onClick={closeMobileMenu}>
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </div>
      <Button />
    </nav>
  );
};

export default Navbar;
