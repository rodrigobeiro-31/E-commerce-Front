import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import axios from "axios";
import { useState } from "react";

function ModalLogin({
  fullscreen,
  show,
  handleClose,
  setShowLogin,
  setFullscreenLogin,
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
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
      handleClose(setShowLogin,setFullscreenLogin)
    } else {
      console.log(response.data);
    }
  };

  return (
    <>
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => handleClose(setShowLogin, setFullscreenLogin)}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark-subtle">
          <div className="mt-4 rounded shadow p-4 container bg-body">
            <h1>Login</h1>
            <form action="/" method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email address..."
                  className="form-control"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password.."
                  className="form-control"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  id="firstCheckbox"
                />
                <label className="form-check-label" htmlFor="firstCheckbox">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-success">
                Sign in
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
