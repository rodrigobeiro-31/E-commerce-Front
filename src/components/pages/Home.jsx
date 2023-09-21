import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { BsCartFill } from "react-icons/bs";
import "./Home.css";
import "../products.css";
import { addToCart } from "../../redux/cartSlice";
import { addPrice } from "../../redux/orderPriceSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../partials/BackToTop";
import ProjectBtn from "../partials/ProjectBtn";

function Home() {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Product added!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/products",
      });
      response && setProducts(response.data.topProducts);
    };
    getProducts();
  }, []);

  const handleAddCart = async (product) => {
    dispatch(addToCart(product));
    dispatch(addPrice(product.price));
    notify();
  };

  return (
    products && (
      <>
        <div className="container-fluid p-0 g-0">
          <img
            id="homeBanner1"
            src="./imgs/home-banner-1.jpg"
            alt="Coffee beans"
          />
          <div className="home-gd-overlay"></div>
          <div
            id="homeTitle"
            className="row d-flex justify-content-center m-0 p-0 mb-5"
          >
            <img
              id="homeLogo"
              src="/imgs/doppios-main-logo.png"
              alt="Doppio's"
            />
          </div>
          <div className="container-fluid main-container p-0 m-0">
            <h3 className="mb-4 fw-bold text-center p-3 week-picks-banner">
              THIS WEEK'S PICKS
            </h3>
            <div className="container mt-5">
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
                            <BsCartFill className="me-1" /> Add
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
          <section
            id="homeAboutSection"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="home-img-container">
              <img
                src="imgs/home-about-img.jpg"
                alt="coffee-shop"
                className="img-home"
              />
            </div>
            <div className="home-text-container">
              {" "}
              <h3 className="card-title mb-5 fw-bold">About Doppio's</h3>
              <p className="contact-text mb-4">
                At Doppio's Coffee & Bakery, we blend the rich tradition of
                artisanal coffee crafting with the comforting aroma of freshly
                baked bread to create an inviting haven for coffee enthusiasts
                and pastry lovers alike. Our name, "Doppio," embodies our
                commitment to excellence, as it refers to the Italian term for
                "double." Just as a doppio espresso is a double shot of pure
                espresso, we aim to double your satisfaction with every visit.
              </p>
              <p className="contact-text">
                With a passion for quality and a dedication to delighting your
                senses, our coffee is sourced from the finest beans and expertly
                roasted to perfection, ensuring each sip is a symphony of
                flavor. Complementing our coffee, our bakery boasts an array of
                handcrafted bread, pastries, and confections, baked fresh daily.
                Join us in savoring the simple pleasures of life, one cup and
                one bite at a time. Welcome to Doppio's, where every visit is a
                double delight.
              </p>
              <img
                className="img align-self-center mt-4 mb-0 opacity-75 home-section-logo"
                src="/imgs/doppios-black-logo.png"
                alt="Doppio's logo"
              />
            </div>
          </section>
          {/* <div id="homeAboutCard" className="card m-5 rounded-0 home-separator">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  id="homeAboutImg"
                  src="/imgs/home-about-img.jpg"
                  className="img-fluid img-home"
                  alt="Coffee place"
                />
              </div>
              <div className="col-md-7 custom-background1">
                <div className="card-body d-flex flex-column align-items-center p-5">
                  <h3 className="card-title mb-5  fw-bold">About Doppio's</h3>
                  <p className="card-text mb-4">
                    At Doppio's Coffee & Bakery, we blend the rich tradition of
                    artisanal coffee crafting with the comforting aroma of
                    freshly baked bread to create an inviting haven for coffee
                    enthusiasts and pastry lovers alike. Our name, "Doppio,"
                    embodies our commitment to excellence, as it refers to the
                    Italian term for "double." Just as a doppio espresso is a
                    double shot of pure espresso, we aim to double your
                    satisfaction with every visit.
                  </p>
                  <p className="card-text">
                    With a passion for quality and a dedication to delighting
                    your senses, our coffee is sourced from the finest beans and
                    expertly roasted to perfection, ensuring each sip is a
                    symphony of flavor. Complementing our coffee, our bakery
                    boasts an array of handcrafted bread, pastries, and
                    confections, baked fresh daily. Join us in savoring the
                    simple pleasures of life, one cup and one bite at a time.
                    Welcome to Doppio's, where every visit is a double delight.
                  </p>
                  <img
                    className="img align-self-center mt-4 mb-0 opacity-75 home-section-logo"
                    src="/imgs/doppios-black-logo.png"
                    alt="Doppio's logo"
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className="container-fluid ps-5 pe-5 mb-5 custom-background1 home-separator">
            <div className="row d-flex">
              <div className="col d-flex flex-column align-items-center p-3">
                <img
                  src="/imgs/coffee-bean-icon.png"
                  alt="label"
                  className="img-fluid mt-3 opacity-75 custom-image"
                />
                <h5 className="text-center mt-3 fw-semibold">Artisanal</h5>
                <p className="text-center fw-light">
                  Indulge in the artisanal excellence of our handcrafted bakery
                  and café, where every creation is a true work of culinary
                  artistry.
                </p>
              </div>
              <div className="col d-flex flex-column align-items-center p-3">
                <img
                  src="/imgs/coffee-bean-icon.png"
                  alt="label"
                  className="img-fluid mt-3 opacity-75 custom-image"
                />
                <h5 className="text-center mt-3 fw-semibold">
                  Natural products
                </h5>
                <p className="text-center fw-light">
                  Experience the goodness of our all-natural products, carefully
                  crafted with Mother Nature's finest ingredients for a
                  wholesome and delightful culinary journey.
                </p>
              </div>
              <div className="col d-flex flex-column align-items-center p-3">
                <img
                  src="/imgs/coffee-bean-icon.png"
                  alt="label"
                  className="img-fluid mt-3 opacity-75 custom-image"
                />
                <h5 className="text-center mt-3 fw-semibold">
                  Family business
                </h5>
                <p className="text-center fw-light">
                  For generations, our family business has been the heart of our
                  bakery and boutique café, where each creation carries with it
                  the love and tradition passed down from parents to children.
                </p>
              </div>
              <div className="col d-flex flex-column align-items-center p-3">
                <img
                  src="/imgs/coffee-bean-icon.png"
                  alt="label"
                  className="img-fluid mt-3 opacity-75 custom-image"
                />
                <h5 className="text-center mt-3 fw-semibold">Sustainable</h5>
                <p className="text-center fw-light">
                  Committed to a sustainable future, we take pride in crafting
                  our products with eco-friendly practices and ingredients that
                  prioritize the well-being of our planet and your health.
                </p>
              </div>
            </div>
          </div>
          <Carousel>
            <Carousel.Item>
              <Image src="./imgs/home-carousel-1.jpg" className="w-100" fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="./imgs/home-carousel-2.jpg" className="w-100" fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="./imgs/home-carousel-3.jpg" className="w-100" fluid />
            </Carousel.Item>
          </Carousel>
        </div>
        <BackToTop />
        <ProjectBtn />
      </>
    )
  );
}

export default Home;
