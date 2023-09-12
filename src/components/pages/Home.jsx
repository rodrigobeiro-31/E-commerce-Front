// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './Home.css';

function Home() {
  const [products, setProducts] = useState();
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (!user) return navigate("/iniciar-sesion");
  // }, []);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/products/top",
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
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
            <div key={id} className="col-3 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <NavLink to={`/products/${product.slug}`}>
                    <h5 className="card-title">{product.name}</h5>
                  </NavLink>
                  <p className="card-text">$USD: {product.price}</p>
                  <a href="#" className="btn btn-secondary float-end">
                    Agregar al carrito
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
}

export default Home;
