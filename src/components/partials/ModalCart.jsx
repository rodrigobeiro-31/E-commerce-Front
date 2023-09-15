import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function ModalCart({ show, handleClose }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddCart = async (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = async (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <div className="offcanvas-title h5"> Shopping Cart</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length > 0 &&
            cart.map((product, id) => (
              <div key={id}>
                <hr className="my-4" />
                <div className="row mb-4 d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src={product.image}
                      className="img-fluid rounded-3"
                      alt={product.name}
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted">{product.category}</h6>
                    <h6 className="text-black mb-0">{product.name}</h6>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button
                      className="btn btn-link px-2"
                      onClick={() => handleAddCart(product)}
                    >
                      <BsFillPlusCircleFill />
                    </button>
                    <h3>{product.quantity}</h3>

                    <button
                      className="btn btn-link px-2"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      <BsFillDashCircleFill />
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h6 className="mb-0 text-black">$ {product.totalPrice}</h6>
                  </div>
                </div>
              </div>
            ))}
        </Offcanvas.Body>
        <div className="border-top cart-footer">
          <div className="d-flex justify-content-between px-2">
            <p className="fw-bold">Order total</p>
            <p className="fw-bold">US$ 26.10</p>
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
