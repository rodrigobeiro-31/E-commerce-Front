import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function CartCheckout() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <h2>Pasaste la autorización</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCheckout;
