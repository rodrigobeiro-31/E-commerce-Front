import { Link, NavLink } from "react-router-dom";
import "./MainNavbar.css";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import ModalCart from "./ModalCart";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Header.css";
import { BsCartFill, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function MainNavbar() {
  const [fullscreenRegister, setFullscreenRegister] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [fullscreenLogin, setFullscreenLogin] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scroll, setScroll] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const [mobile, setMobile] = useState(false);

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
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <nav>
      <div className="nav-logo">
        <Link to={"/"}>
          <img
            src="https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/resources/doppios-white-logo.png"
            alt="Doppios Logo"
            className="nav-logo"
          />
        </Link>
      </div>
      <div>
        <ul
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <NavLink className="nav-link" aria-current="page" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className="nav-link" to="/about-us">
            <li>About This Project</li>
          </NavLink>
          <NavLink className="nav-link" to="/products">
            <li>Products</li>
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            <li>Contact</li>
          </NavLink>
          <div className="nav-auth-btn">
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
            {!user && (
              <Button
                variant="light"
                className="auth-btn"
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
            )}
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
            {!user && (
              <Button
                variant="outline-light"
                className="auth-btn"
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
            )}
            <ModalCart
              show={showCart}
              handleClose={handleCloseCart}
              handleShowAll={handleShowAll}
              setShowLogin={setShowLogin}
              setFullscreenLogin={setFullscreenLogin}
              setShowRegister={setShowRegister}
              setFullscreenRegister={setFullscreenRegister}
            />
            {user && (
              <NavLink to={`profile/${user.id}`}>
                <BsFillPersonFill className="nav-icon" />
              </NavLink>
            )}
            <BsCartFill className="nav-icon" onClick={handleShowCart} />
            {user && (
              <HiOutlineLogout
                className="nav-icon"
                onClick={() => handleLogOut()}
              />
            )}
          </div>
        </ul>
      </div>
      <button
        className="nav-btn mobile-menu-icon"
        onClick={() => setMobile(!mobile)}
      >
        {mobile ? <RxCross1 /> : <FaBars />}
      </button>
    </nav>
  );
}

export default MainNavbar;