import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center  text-white">
      <div className="">
        <img
          src="imgs/doppios-white-logo.png"
          alt="Doppios Logo"
          className="nav-logo"
        />
      </div>
      <div className="nav text-white">
        <NavLink to="/" className="footerLink nav-link">
          HOME
        </NavLink>
        <NavLink to="/products" className="footerLink nav-link">
          PRODUCTS
        </NavLink>
        <NavLink to="/about-us " className="footerLink nav-link">
          ABOUT THIS PROJECT
        </NavLink>
        <NavLink to="/contact" className="footerLink nav-link">
          CONTACT
        </NavLink>
      </div>
      <div className="d-flex justify-content-between gap-2">
        <h6 className="footerLink nav-link text-white align-self-center">
          SOCIAL :
        </h6>
        <a
          href="https://www.facebook.com/"
          target="blank"
          className=" footerLink text-white mb-2 a-icons"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="blank"
          className=" footerLink text-white a-icons"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="blank"
          className=" footerLink text-white a-icons"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="blank"
          className=" footerLink text-white a-icons"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
