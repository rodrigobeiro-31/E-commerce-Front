import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center mt-5 text-white">
      <div className="">HackCommerce</div>
      <div className="nav">
        <NavLink to="#" className="nav-link py-1 footer-links">
          INICIO
        </NavLink>
        <NavLink to="#" className="nav-link py-1 footer-links">
          SOBRE NUESTRO PROYECTO
        </NavLink>
        <NavLink to="# " className="nav-link py-1 footer-links">
          PRODUCTOS
        </NavLink>
        <NavLink to="#" className="nav-link py-1 footer-links">
          CONTACTO
        </NavLink>
      </div>
      <div>SOCIAL:</div>
    </footer>
  );
}

export default Footer;
