import { NavLink } from "react-router-dom";
import ModalRegister from "./ModalRegister";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalLogin from "./ModalLogin";

function Navbar() {
    const [fullscreenRegister, setFullscreenRegister] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [fullscreenLogin, setFullscreenLogin] = useState(true);
    const [showLogin, setShowLogin] = useState(false);

    const handleShowRegister = () => {
        setFullscreenRegister(true);
        setShowRegister(true);
    };
    const handleCloseRegister = () => {
        setFullscreenRegister(false);
        setShowRegister(false);
    };
    const handleShowLogin = () => {
        setFullscreenLogin(true);
        setShowLogin(true);
    };
    const handleCloseLogin = () => {
        setFullscreenLogin(false);
        setShowLogin(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Porto Membrillo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between align-items-baseline" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/productos">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about-us">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto">Contact</NavLink>
                        </li>
                    </ul>
                    <div>
                    <ModalRegister fullscreen={fullscreenRegister} show={showRegister} handleClose={handleCloseRegister} />
                    <Button className="me-2 mb-2" onClick={handleShowRegister}>
                        Register
                    </Button>
                    <ModalLogin fullscreen={fullscreenLogin} show={showLogin} handleClose={handleCloseLogin} />
                    <Button className="me-2 mb-2" onClick={handleShowLogin}>
                        Login
                    </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;