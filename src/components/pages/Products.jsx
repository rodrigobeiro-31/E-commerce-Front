import React from "react";
import "../products.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";

function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/products",
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
      });
      response && setProducts(response.data);
    };
    getProducts();
  }, []);
  return (
    products && (
      <>
        <div className="container-fluid d-flex align-items-center flex-column justify-content-center imageContainer m-0 p-0">
          <h2 className="text-white d-flex justify-content-center align-items-center title">
            PRODUCTS
          </h2>
        </div>

        <div className="container mt-5">
          <div className="row d-flex flex-wrap g-3 m-0">
            {products.map((product, id) => (
              <div key={id} className="col-3 mainCard mb-5">
                <div className="productsCard">
                  <div className="position-relative">
                    <img
                      src={product.image}
                      className="card-img imgCard"
                      alt={product.name}
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end p-0 addToCart">
                      <h6 className="text-center mt-auto p-1">
                        {" "}
                        <BsFillBagFill /> ADD TO CART
                      </h6>
                    </div>
                  </div>
                  <div
                    className="card-body p-1 ps-2 mt-3"
                    style={{ backgroundColor: "black" }}
                  >
                    <NavLink
                      className="text-decoration-none productName"
                      to={`/products/${product.slug}`}
                    >
                      <p className="card-title text-uppercase fw-bold">
                        {product.name}
                      </p>
                    </NavLink>
                    <p className="card-text priceText mt-2 fst-italic">
                      $USD: {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
}

export default Products;
