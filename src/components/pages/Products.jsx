import React from "react";
import "../products.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { addPrice } from "../../redux/orderPriceSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../partials/ProductCard";

function Products() {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Product added!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const [filtered, setFiltered] = useState("All");

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/filter/${filtered}`,
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
      });
      response && setProducts(response.data);
    };
    getProducts();
  }, [filtered]);
  console.log(products);

  const handleAddCart = async (product) => {
    dispatch(addToCart(product));
    dispatch(addPrice(product.price));
    notify();
  };

  return (
    products && (
      <>
        <div className="container-fluid main-container p-0">
          <div className="container-fluid d-flex align-items-center flex-column justify-content-center imageContainer m-0 p-0">
            <h2 className="text-white d-flex justify-content-center align-items-center title">
              PRODUCTS
            </h2>
          </div>
          <div className="container mt-5">
            <div className="row d-flex justify-content-end pe-2 me-5">
              <h5 className="col text-black fw-semibold text-end">Filter by category:</h5>
              <select className="col-3 form-select-sm mb-5 rounded-0" aria-label=".form-select-sm example" onChange={(event) => setFiltered(event.target.value)}>
                <option className="fw-semibold" value="All" selected>All products</option>
                <option value="Cafe">Cafe</option>
                <option value="Bakery">Bakery</option>
                <option value="Cakes">Cakes</option>
                <option value="Coffee beans">Coffee beans</option>
              </select>
            </div>
            <div className="row d-flex justify-content-center flex-wrap m-0 gap-3 pb-5">
              {products.map((product, id) => (
                <ProductCard key={id} product={product} handleAddCart={handleAddCart} />
              ))}
              <ToastContainer autoClose={3000} />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Products;
