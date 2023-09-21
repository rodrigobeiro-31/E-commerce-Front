import React from "react";
import "../products.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../redux/orderPriceSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                <div key={id} className="mainCard p-1 rounded-1">
                  <div className="productsCard">
                    <img
                      src={`https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/products/${product.image}?t=2023-09-19T13%3A20%3A01.474Z`}
                      className="card-img imgCard"
                      alt={product.name}
                    />
                    <div
                      className="card-body px-3 py-1 mt-2 card-info d-flex flex-column justify-conetnt-between"
                      style={{ backgroundColor: "white" }}
                    >
                      <NavLink
                        className="text-decoration-none productName"
                        to={`/products/${product.slug}`}
                      >
                        <p className="card-title text-dark text-uppercase fw-bold mb-2 product-name">
                          {product.name}
                        </p>
                      </NavLink>
                      <div className="d-flex justify-content-between align-items-baseline mt-1">
                        <p className="card-text fw-normal ps-2 priceText">
                          $ {product.price}
                        </p>
                        <button
                          className="addToCartButton1 fs-5 px-3 py-1 d-flex align-items-center"
                          onClick={() => handleAddCart(product)}
                        >
                          <BsCartFill className=" me-1" /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
