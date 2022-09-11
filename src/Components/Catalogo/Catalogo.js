import "./EstiloCatalogo.css";
import { NavLink } from "react-router-dom";

const Catalogo = () => {
  return (
    <div className="Generos">
      <NavLink to="/Catalogo/RockAlternativo">
        <button>Rock Alternativo</button>
      </NavLink>
      <NavLink to="/Catalogo/RockIndustrial">
        <button>Rock Industrial</button>
      </NavLink>
      <NavLink to="/Catalogo/Electronica-TripHop">
        <button>Electronica - Trip Hop</button>
      </NavLink>
    </div>
  );
};

export default Catalogo;
