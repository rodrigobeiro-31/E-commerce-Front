import { NavLink } from "react-router-dom";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import ModalCart from "./ModalCart";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Navbar() {
  const [fullscreenRegister, setFullscreenRegister] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [fullscreenLogin, setFullscreenLogin] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  //Handle for register and login
  const handleShowAll = (handleShow, handleShowScreen) => {
    handleShow(true);
    handleShowScreen(true);
  };
  const handleCloseAll = (handleClose, handleCloseScreen) => {
    handleClose(false);
    handleCloseScreen(false);
  };

  //Handle for cart
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Porto Membrillo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between align-items-baseline"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobre-nosotros">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contact
              </NavLink>
            </li>
          </ul>
          <div>
            <ModalRegister
              fullscreen={fullscreenRegister}
              show={showRegister}
              handleClose={handleCloseAll}
              setShowRegister={setShowRegister}
              setFullscreenRegister={setFullscreenRegister}
            />
            <Button
              className="me-2 mb-2"
              onClick={() =>
                handleShowAll(setShowRegister, setFullscreenRegister)
              }
            >
              Register
            </Button>
            <ModalLogin
              fullscreen={fullscreenLogin}
              show={showLogin}
              handleClose={handleCloseAll}
              setShowLogin={setShowLogin}
              setFullscreenLogin={setFullscreenLogin}
            />
            <Button
              className="me-2 mb-2"
              onClick={() => handleShowAll(setShowLogin, setFullscreenLogin)}
            >
              Login
            </Button>
            <ModalCart show={showCart} handleClose={handleCloseCart} />
            <Button className="me-2 mb-2" onClick={handleShowCart}>
              Cart
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
