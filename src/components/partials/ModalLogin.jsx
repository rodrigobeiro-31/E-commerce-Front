import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import axios from "axios";
import { useState } from "react";
import "../ModalLoginRegister.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function ModalLogin({
  fullscreen,
  show,
  handleClose,
  handleShowAll,
  setShowRegister,
  setFullscreenRegister,
  setShowLogin,
  setFullscreenLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: `http://localhost:3000/tokens`,
      data: { password, email },
    });
    if (response.data.token) {
      dispatch(login(response.data.token));
      handleClose();
    } else {
      console.log(response.data);
    }
  };

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => handleClose()}>
        <span
          className="position-absolute top-0 end-0 text-white pt-4 pe-4 fw-bold fs-4 z-1"
          onClick={() => handleClose()}
        >
          <AiOutlineClose className="closeBtn" />{" "}
        </span>
        <Modal.Body className="modal-bg">
          <div className="login-box p-4">
            <p>Login</p>
            <form action="/" method="post" onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <p className="mt-4 text-white">
                Forgot your password?{" "}
                <Link className="a2">Reset password!</Link>
              </p>
            </div>
            <div className="col d-flex align-items-start">
              <p className="text-white">
                Don't have an account?{" "}
                <Link
                  onClick={() =>
                    handleShowAll(
                      setShowRegister,
                      setFullscreenRegister,
                      setShowLogin,
                      setFullscreenLogin
                    )
                  }
                  className="a2"
                >
                  Register here!
                </Link>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
