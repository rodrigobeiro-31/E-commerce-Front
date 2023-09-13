// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { BsFillBagFill } from "react-icons/bs";
import './Home.css';
import '../products.css';

function Home() {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/products/top",
      });
      response && setProducts(response.data);
    };
    getProducts();
  }, []);

  return products &&
    <>
      <div className="container-fluid p-0 g-0">
        {/* <Carousel>}
          {/* <Carousel.Item>
            <Image src="./imgs/home-carousel-1.jpg" className="w-100" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./imgs/home-carousel-2.jpg" className="w-100" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./imgs/home-carousel-3.jpg" className="w-100" fluid />
          </Carousel.Item> */}
        {/* </Carousel> */}
        <img id="homeBanner1" src="./imgs/home-banner-1.jpg" alt="Coffee beans" />
        <div id="homeTitle" className="row d-flex justify-content-center m-0 p-0 mb-5">
          <img id="homeLogo" src="/imgs/doppios-main-logo.png" alt="Doppio's" />
        </div>
        <div id="homeAboutCard" className="card m-5 rounded-0">
          <div className="row g-0">
            <div className="col-md-5">
              <img id="homeAboutImg" src="/imgs/home-about-img.jpg" className="img-fluid" alt="Coffee place" />
            </div>
            <div className="col-md-7">
              <div className="card-body d-flex flex-column align-items-center p-5">
                <h3 className="card-title mb-5  fw-bold">About Doppio's</h3>
                <p className="card-text mb-4">At Doppio's Coffee & Bakery, we blend the rich tradition of artisanal coffee crafting with the comforting aroma of freshly baked bread to create an inviting haven for coffee enthusiasts and pastry lovers alike. Our name, "Doppio," embodies our commitment to excellence, as it refers to the Italian term for "double." Just as a doppio espresso is a double shot of pure espresso, we aim to double your satisfaction with every visit.</p>
                <p className="card-text">With a passion for quality and a dedication to delighting your senses, our coffee is sourced from the finest beans and expertly roasted to perfection, ensuring each sip is a symphony of flavor. Complementing our coffee, our bakery boasts an array of handcrafted bread, pastries, and confections, baked fresh daily. Whether you're seeking the bold, invigorating notes of a doppio espresso or the comforting embrace of a warm croissant, Doppio's is where genuine Italian tradition meets warm-hearted hospitality. Join us in savoring the simple pleasures of life, one cup and one bite at a time. Welcome to Doppio's, where every visit is a double delight.</p>
                <img className="img align-self-center mt-4 mb-0 opacity-75 homeSectionLogo" src="/imgs/doppios-black-logo.png" alt="Doppio's logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 m-0 p-0">
          <h3 className="mb-4 fw-bold text-center bg-light p-2">THIS WEEK'S PICKS</h3>
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
                    <h6 className="text-center mt-auto">
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
                    <h5 className="card-title">{product.name}</h5>
                  </NavLink>
                  <p className="card-text priceText mt-2">
                    $USD: {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
}

export default Home;
