import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center  text-white">
      <div className="">HackCommerce</div>
      <div className="nav">
        <NavLink to="#" className="nav-link py-1 footer-links">
          START
        </NavLink>
        <NavLink to="#" className="nav-link py-1 footer-links">
          ABOUT OUR PROJECT
        </NavLink>
        <NavLink to="# " className="nav-link py-1 footer-links">
          PRODUCTS
        </NavLink>
        <NavLink to="#" className="nav-link py-1 footer-links">
          CONTACT
        </NavLink>
      </div>
      <div>SOCIAL:</div>
    </footer>
  );
}

export default Footer;
