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
        <div className="row d-flex text-center m-0 p-0">
          <h1 className="mt-2">Home</h1>
          <h5 className="mt-1">Scroll down to see more</h5>
        </div>
        <div className="row mt-5 m-0 p-0">
          <h3 className="mb-5">Top products</h3>
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
