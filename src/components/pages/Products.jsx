import React from "react";
import "../products.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../redux/orderPriceSlice";

function Products() {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/products",
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
      });
      response && setProducts(response.data.products);
    };
    getProducts();
  }, []);

  const handleAddCart = async (product) => {
    dispatch(addToCart(product));
    dispatch(addPrice(product.price));
  };
  return (
    products && (
      <>
        {console.log(products)}
        <div className="container-fluid main-container p-0">
          <div className="container-fluid d-flex align-items-center flex-column justify-content-center imageContainer m-0 p-0">
            <h2 className="text-white d-flex justify-content-center align-items-center title">
              PRODUCTS
            </h2>
          </div>

          {/* <div className="container mt-5">
            <div className="row d-flex flex-wrap g-3 m-0">
              {products.map((product, id) => (
                <div key={id} className="col-3 mainCard mb-5">
                  {console.log(product.slug)}

                  <div className="productsCard">
                    <div className="position-relative">
                      <img
                        src={`https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/products/${product.image}?t=2023-09-19T13%3A20%3A01.474Z`}
                        className="card-img imgCard"
                        alt={product.name}
                      />
                      <div
                        className="card-img-overlay d-flex flex-column justify-content-end p-0 addToCart"
                        onClick={() => handleAddCart(product)}
                      >
                        <h6 className="text-center mt-auto p-1">
                          {" "}
                          <BsFillBagFill /> ADD TO CART
                        </h6>
                      </div>
                    </div>
                    <div
                      className="card-body p-1 ps-4 mt-3"
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
                        Price: $ {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="container mt-5">
            <div className="row d-flex justify-content-center flex-wrap m-0 gap-3 pb-5">
              {products.map((product, id) => (
                <div key={id} className="mainCard p-1 rounded-1">
                  {console.log(product.slug)}

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
                        <p className="card-title text-dark text-uppercase fw-bold product-name">
                          {product.name}
                        </p>
                      </NavLink>

                      <div className="d-flex justify-content-between align-items-center mt-1">
                        <p className="card-text priceText fw-medium fst-italic mt-2 mb-2">
                          $ {product.price}
                        </p>
                        <button
                          className="addToCartButton1 px-2 py-1 d-flex align-items-center"
                          onClick={() => handleAddCart(product)}
                        >
                          <BsCartFill className="me-1"/> Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Products;
