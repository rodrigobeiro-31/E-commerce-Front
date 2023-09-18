import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { resetCart } from "../../redux/cartSlice";
import { resetPrice } from "../../redux/orderPriceSlice";

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
        Authorization: "Bearer " + (user && user),
      },
    });
    dispatch(resetCart());
    dispatch(resetPrice());
  }

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <h2>Pasaste la autorización</h2>
          </div>
          <button
            className="btn btn-secondary"
            onClick={handleClick}
          >Complete order</button>
        </div>
      </div>
    </>
  );
}

export default CartCheckout;
