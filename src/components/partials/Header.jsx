import { NavLink } from "react-router-dom";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import ModalCart from "./ModalCart";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Header.css";
import NavbarToggle from "./NavbarToggle";
import { BsCartFill } from "react-icons/bs";

function Header() {
  const [fullscreenRegister, setFullscreenRegister] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [fullscreenLogin, setFullscreenLogin] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  //Handle for register and login
  const handleShowAll = (
    handleShow,
    handleShowScreen,
    handleClose,
    handleCloseScreen
  ) => {
    handleShow(true);
    handleShowScreen(true);
    handleClose(false);
    handleCloseScreen(false);
  };
  const handleCloseAll = () => {
    setFullscreenRegister(false);
    setShowRegister(false);
    setFullscreenLogin(false);
    setShowLogin(false);
  };

  //Handle for cart
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${scroll ? "nav-scroll" : "nav-top"} navbar-custom`}
        fixed="top"
      >
        <div>
          <Navbar.Brand href="/">
            <img
              src="imgs/doppios-white-logo.png"
              alt="Doppios Logo"
              className="nav-logo"
            />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            children={<NavbarToggle />}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about-us">
                About This Project
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <div>
                <ModalRegister
                  fullscreen={fullscreenRegister}
                  show={showRegister}
                  handleClose={handleCloseAll}
                  handleShowAll={handleShowAll}
                  setShowLogin={setShowLogin}
                  setFullscreenLogin={setFullscreenLogin}
                  setShowRegister={setShowRegister}
                  setFullscreenRegister={setFullscreenRegister}
                />
                <Button
                  variant="light"
                  className="me-3 mb-2"
                  onClick={() =>
                    handleShowAll(
                      setShowRegister,
                      setFullscreenRegister,
                      setShowLogin,
                      setFullscreenLogin
                    )
                  }
                >
                  Register
                </Button>
                <ModalLogin
                  fullscreen={fullscreenLogin}
                  show={showLogin}
                  handleClose={handleCloseAll}
                  handleShowAll={handleShowAll}
                  setShowRegister={setShowRegister}
                  setFullscreenRegister={setFullscreenRegister}
                  setShowLogin={setShowLogin}
                  setFullscreenLogin={setFullscreenLogin}
                />
                <Button
                  variant="outline-light"
                  className="me-3 mb-2"
                  onClick={() =>
                    handleShowAll(
                      setShowLogin,
                      setFullscreenLogin,
                      setShowRegister,
                      setFullscreenRegister
                    )
                  }
                >
                  Login
                </Button>
                <ModalCart show={showCart} handleClose={handleCloseCart} />
                <BsCartFill
                  className="me-2 mb-2 nav-icon"
                  onClick={handleShowCart}
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;

{
  /* <nav
        className={`navbar navbar-expand-lg navbar-light bg-dark fixed-top ${
          scroll ? "nav-scroll" : "nav-custom"
        }`}
      >
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
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div>
              <ModalRegister
                fullscreen={fullscreenRegister}
                show={showRegister}
                handleClose={handleCloseAll}
                handleShowAll={handleShowAll}
                setShowLogin={setShowLogin}
                setFullscreenLogin={setFullscreenLogin}
                setShowRegister={setShowRegister}
                setFullscreenRegister={setFullscreenRegister}
              />
              <Button
                className="me-2 mb-2"
                onClick={() =>
                  handleShowAll(
                    setShowRegister,
                    setFullscreenRegister,
                    setShowLogin,
                    setFullscreenLogin
                  )
                }
              >
                Register
              </Button>
              <ModalLogin
                fullscreen={fullscreenLogin}
                show={showLogin}
                handleClose={handleCloseAll}
                handleShowAll={handleShowAll}
                setShowRegister={setShowRegister}
                setFullscreenRegister={setFullscreenRegister}
                setShowLogin={setShowLogin}
                setFullscreenLogin={setFullscreenLogin}
              />
              <Button
                className="me-2 mb-2"
                onClick={() =>
                  handleShowAll(
                    setShowLogin,
                    setFullscreenLogin,
                    setShowRegister,
                    setFullscreenRegister
                  )
                }
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
      </nav> */
}
