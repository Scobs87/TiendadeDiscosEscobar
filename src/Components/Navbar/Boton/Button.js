import { NavLink } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <NavLink to="/Login">
      <button className="btn">Login</button>
    </NavLink>
  );
};

export default Button;
