import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import axios from "axios";
import { useState } from "react";
import "../ModalLoginRegister.css";
import { Link } from "react-router-dom";

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
      dispatch(login(response.data));
      handleClose();
    } else {
      console.log(response.data);
    }
  };

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark-subtle">
          <div className="login-box p-4">
            <p>Login</p>
            <form action="/" method="post" onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
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
                  placeholder="Password.."
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
            <p className="mt-3">
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
