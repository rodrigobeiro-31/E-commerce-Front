import Modal from "react-bootstrap/Modal";
import "../ModalLoginRegister.css";
import { Link } from "react-router-dom";

function ModalRegister({
  fullscreen,
  show,
  handleClose,
  handleShowAll,
  setShowLogin,
  setFullscreenLogin,
  setShowRegister,
  setFullscreenRegister,
}) {
  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-bg">
          <div className="login-box p-4">
            <p>Create an account</p>
            <form action="">
              <div className="user-box">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control"
                  autoComplete="off"
                />
                <label htmlFor="firstname">Firstname</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="Lastname"
                  id="Lastname"
                  className="form-control"
                  autoComplete="off"
                />
                <label htmlFor="Lastname">Lastname</label>
              </div>
              <div className="user-box">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  autoComplete="off"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
                <label htmlFor="password">Password</label>
              </div>
              <button className="btn-modal" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
            </form>
            <div className="col d-flex align-items-start">
              <p className="mt-3">
                Already have an account?{" "}
                <Link
                  onClick={() =>
                    handleShowAll(
                      setShowLogin,
                      setFullscreenLogin,
                      setShowRegister,
                      setFullscreenRegister
                    )
                  }
                  className="a2"
                >
                  Sign in!
                </Link>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister;
