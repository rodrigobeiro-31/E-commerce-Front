import React from "react";
import "./product.css";
import { BsCartFill } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../../redux/cartSlice";
import { addPrice } from "../../redux/orderPriceSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const params = useParams();
  const slug = params.slug;
  const dispatch = useDispatch();
  const [interestingProduct, setInterestingProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const notify = () => {
    toast.success("Product added!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/${slug}`,
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
      });
      response && setProduct(response.data.product[0]);
      response && setInterestingProduct(response.data.products);
    };
    getProduct();
  }, [location.pathname]);

  const handleAddCart = async (product) => {
    dispatch(addToCart(product));
    dispatch(addPrice(product.price));
    notify();
  };

  return (
    product && (
      <>
        <div className="container-fluid main-container">
          {console.log(product)}
          <div className="container d-flex justify-content-center align-items-center mb-3 data-container">
            <div className="row g-0 mt-5">
              <div className="col-6">
                <img
                  src={`https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/products/${product.image}?t=2023-09-19T13%3A20%3A01.474Z`}
                  style={{
                    maxHeight: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-6 cardBody">
                <div className="card-body p-5">
                  <h3 className="text-uppercase fw-bold">{product.name}</h3>
                  <p className="card-text mt-3 fs-2 priceText fst-italic">
                    Price: ${product.price}
                  </p>
                  <p className="card-text">{product.description}</p>
                  <hr className="mt-5" />
                  <p>CATEGORY: {product.category}</p>
                  <p className="text-body-secondary ">STOCK: {product.stock}</p>
                  <hr className="mt-2" />
                  <div
                    className="d-flex justify-content-end mt-5 "
                    onClick={() => handleAddCart(product)}
                  >
                    <a
                      href="#"
                      className="text-decoration-none d-flex align-items-center px-5 py-3 addToCartButton"
                    >
                      <BsCartFill />
                      <span className="ms-2">ADD TO CART</span>
                    </a>
                  </div>
                  <ToastContainer autoClose={3000} />
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Ordering and shipping information
                </Accordion.Header>
                <Accordion.Body>
                  In our store, customer satisfaction is our priority. Placing
                  an order is easy and convenient. Simply select your favorite
                  products, provide your shipping details and choose your
                  preferred payment method. Our team of expert bakers will
                  prepare with love and care your fresh produce before shipping
                  it safely and on time to your door Trust us to offer you an
                  experience of exceptional purchase, where quality and
                  freshness are what first.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Payment methods</Accordion.Header>
                <Accordion.Body>
                  We want your shopping experience to be comfortable and safe.
                  We offer a variety of payment methods to suit your needs. You
                  can pay with credit or debit card. We also accept bank
                  transfers and, if you prefer, You can pay in cash in our
                  physical store at the time of Delivery. Your safety and
                  convenience are essential to us, so you can choose the method
                  that best suits you. suits.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Legal warning</Accordion.Header>
                <Accordion.Body>
                  This website is designed to provide information about our
                  products and allow you to make purchases online. Us We strive
                  to maintain the accuracy and timeliness of the information,
                  but we do not guarantee the constant availability of all the
                  products. Additionally, any information provided This site
                  should not be considered legal, medical or advice.
                  professional. By making a purchase, you agree to our terms and
                  conditions, including our privacy policy. Yeah If you have any
                  questions or concerns, do not hesitate to contact us. You
                  satisfaction is our priority.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>


<div className="container mt-5">
            <div className="row d-flex justify-content-center flex-wrap m-0 gap-3 pb-5">
              {interestingProduct.map((product, id) => (
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

export default Product;
