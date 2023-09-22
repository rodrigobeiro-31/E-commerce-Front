import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import "../pages/Home.css";
import "../products.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product, handleAddCart }) {
    const notifyError = () => {
        toast.error("Sorry, there's no more stock for this product.", {
            position: toast.POSITION.BOTTOM_LEFT,
        });
    };

    return (
        <div className="mainCard p-1 rounded-1">
            <div className="productsCard">
                <NavLink
                    className="text-decoration-none productName"
                    to={`/products/${product.slug}`}
                >
                    <img
                        src={`https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/products/${product.image}?t=2023-09-19T13%3A20%3A01.474Z`}
                        className="card-img imgCard"
                        alt={product.name}
                    />
                </NavLink>
                <div
                    className="card-body px-3 py-1 mt-2 d-flex flex-column justify-content-between card-info"
                >
                    <NavLink
                        className="text-decoration-none productName"
                        to={`/products/${product.slug}`}
                    >
                        <p className="card-title text-dark text-uppercase fw-bold product-name">
                            {product.name}
                        </p>
                    </NavLink>

                    <div className="d-flex justify-content-between align-items-center mt-1">
                        <p className="card-text priceText fw-semibold mt-2 mb-2">
                            $ {product.price}
                        </p>
                        {product.stock > 0
                            ? <button
                                className="addToCartButton1 px-3 py-2 d-flex align-items-center"
                                onClick={() => handleAddCart(product)}
                            >
                                <BsCartFill className="me-1" /> Add
                            </button>
                            : <button
                                className="addToCartButton1 px-3 py-2 d-flex align-items-center"
                                onClick={notifyError}
                            >
                                <BsCartFill className="me-1" /> Add
                            </button>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={3000} />
        </div>
    )
};

export default ProductCard;