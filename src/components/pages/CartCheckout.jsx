import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalLogin from "../partials/ModalLogin";
import { useNavigate } from "react-router";
import ModalRegister from "../partials/ModalRegister";

function CartCheckout() {
  const user = useSelector((state) => state.user);
  const [fullscreenRegister, setFullscreenRegister] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [fullscreenLogin, setFullscreenLogin] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setShowLogin(true);
    }
  }, [user]);

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
    navigate("/");
  };
  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <h2>Pasaste la autorización</h2>
          </div>
        </div>
      </div>
      (
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
      )
    </>
  );
}

export default CartCheckout;
