import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./Home.css";
import "../products.css";
import { addToCart } from "../../redux/cartSlice";
import { addPrice } from "../../redux/orderPriceSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../partials/BackToTop";
import ProjectBtn from "../partials/ProjectBtn";
import ProductCard from "../partials/ProductCard";

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
        url: "http://localhost:3000/products/filter/top",
      });
      response && setProducts(response.data);
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
                  <ProductCard key={id} product={product} handleAddCart={handleAddCart} />
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
              <h3 className="card-title fw-bold">About Doppio's</h3>
              <span className="line-span align-self-center mb-5"></span>
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
          <div className="container-fluid d-flex flex-column align-items-center ps-5 pe-5 mb-5 custom-background1 home-separator">
            <h3 className="card-title fw-bold text-center">Our values</h3>
            <span className="line-span mb-2"></span>
            <div className="row d-flex px-5 mx-5">
              <div className="col d-flex flex-column align-items-center p-3 home-value">
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
              <div className="col d-flex flex-column align-items-center p-3 home-value">
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
              <div className="col d-flex flex-column align-items-center p-3 home-value">
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
              <div className="col d-flex flex-column align-items-center p-3 home-value">
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
