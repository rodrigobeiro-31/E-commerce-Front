import Modal from "react-bootstrap/Modal";

function ModalLogin({fullscreen, show, handleClose}) {
  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark-subtle">
          <div className="mt-4 rounded shadow p-4 container bg-body">
            <h1>Login</h1>
            <form action="">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email address.."
                  className="form-control"
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
                />
              </div>
              <div className="mb-3">
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  value=""
                  id="firstCheckbox"
                />
                <label class="form-check-label" for="firstCheckbox">
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
