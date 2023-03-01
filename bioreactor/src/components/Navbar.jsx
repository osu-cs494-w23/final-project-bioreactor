import { NavLink } from "react-router-dom";
import "../css-data/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="home">
        <NavLink to="/main">BIOREACTOR</NavLink>
      </div>
      <div className="general-nav">
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="general-nav">
        <NavLink to="/recipes">Recipes</NavLink>
      </div>
      <div className="general-nav">
        <NavLink to="/setting">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
