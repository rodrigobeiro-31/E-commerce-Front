import Modal from "react-bootstrap/Modal";

function ModalRegister({
  fullscreen,
  show,
  handleClose,
  setShowRegister,
  setFullscreenRegister,
}) {
  return (
    <>
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => handleClose(setShowRegister, setFullscreenRegister)}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark-subtle">
          <div className="mt-4 rounded shadow p-4 container bg-body">
            <h1>Create an account</h1>
            <form action="">
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Firstname.."
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Lastname.."
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
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
              <button type="submit" className="btn btn-success mt-2">
                Create account
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister;
