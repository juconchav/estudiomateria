import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/em_icon.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <img className="logo" src={logo} alt="Logo de la marca" />
        </div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/productos"}>Shop</Link>
          </li>
          <li>
            <Link to={"/works"}>Works</Link>
          </li>
          <li>
            <Link to={"/nosotros"}>Bio</Link>
          </li>
          <li>
            <Link to={"/contacto"}>Contact</Link>
          </li>
          <li>
            <Link to="/cart"><CartWidget/></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
