import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function ModalCart({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <div className="offcanvas-title h5"> Shopping Cart</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. Content of products!
        </Offcanvas.Body>
        <div className="border-top cart-footer">
          <div className="d-flex justify-content-between px-2">
            <p className="fw-bold">Order total</p>
            <p className="fw-bold">US$ 0.00</p>
          </div>
          <div className="d-flex justify-content-between px-2">
            <p className="fw-bold">Shipping</p>
            <p className="fw-bold">Free</p>
          </div>
          <div className="p-2">
            <a
              href=""
              className="btn rounded-pill bg-black fw-medium text-white w-100"
              aria-label="Check Out"
            >
              Check Out
            </a>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}

export default ModalCart;
