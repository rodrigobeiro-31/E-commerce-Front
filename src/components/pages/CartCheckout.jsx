import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { resetCart } from "../../redux/cartSlice";
import { resetPrice } from "../../redux/orderPriceSlice";
import './CartCheckout.css';

function CartCheckout() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const orderPrice = useSelector((state) => state.orderPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const handleClick = async () => {
    const orderId = uuidv4();
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/orders/",
      data: { cart, orderPrice, orderId },
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });
    dispatch(resetCart());
    dispatch(resetPrice());
    navigate("/home");
  }

  console.log(cart);

  return (
    <>
      <div className="checkout-container pb-5">
        <div className="checkout-bg-img container-fluid">
          <div className="checkout-gd-overlay"></div>
        </div>
        <div className="container p-5">
          <div className="row d-flex justify-content-center mt-4 gap-3">
            <h2 className="d-flex justify-content-center align-items-center mb-3 title">
              CHECKOUT
            </h2>
            <div className="col-8 card p-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(product, id)}
                  <tr>
                    <td scope="row">Product</td>
                    <td>1</td>
                    <td>$ 2.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-3 card p-3">
              <div className="card-body">
                <h5 className="card-title mb-4">Order summary</h5>
                <ul className="me-4">
                  <li className="d-flex justify-content-between">
                    <span className="fst-italic">Products </span>
                    <span>$ 2.50</span></li>

                  <li className="d-flex justify-content-between">
                    <span className="fst-italic">Shipping </span>
                    <span>$ 0.00</span></li>
                  <li className="d-flex justify-content-between mt-2">
                    <span className="fw-semibold">Total </span>
                    <span>$ 2.50</span></li>
                </ul>
                <div className="row px-3 pt-4 pb-2">
                  <button
                    className="btn btn-none text-center rounded-0 px-2 py-2 completeOrderBtn"
                    onClick={handleClick}
                  >Complete order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCheckout;
