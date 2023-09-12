import React from "react";
import "../products.css"
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
        <div className="container mt-5">
          <h2 className="text-center">All products</h2>
          <div className="row">
            <div className="col d-flex justify-content-end">
              <h4 className="m-0">Filter by:</h4>
              <div className="dropdown ms-2">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Cafetería
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Panadería
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mt-5">
          <div className="row">
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
                      Ir al carrito
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

{/* <div className="container mt-5">
          <div className="row">
            {products.map((product, id) => (
              <div key={id} className="col-3 mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div class="card-img-overlay">
                    <h6 className="text-center">Add to cart</h6>
                  </div>
                  <div className="card-body">
                    <NavLink to={`/products/${product.slug}`}>
                      <h5 className="card-title">{product.name}</h5>
                    </NavLink>
                    <p className="card-text">$USD: {product.price}</p>
                    <a href="#" className="btn btn-secondary float-end">
                      Ir al carrito
                    </a>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div> */}

<div className="container mt-5">
  <div className="row d-flex justify-content-between g-2 m-0">
    {products.map((product, id) => (
      <div key={id} className="col-4 mainCard">
        <div className="productsCard">
          <div className="position-relative" >
            <img
              src={product.image}
              className="card-img imgCard"
              alt={product.name}
              style={{ width: "25rem", height:"25rem", objectFit: "cover" }}
              
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-0 addToCart">
              <h6 className="text-center mt-auto"> <BsFillBagFill/> ADD TO CART</h6>
            </div>
          </div>
          <div className="card-body">
            <NavLink  className="text-decoration-none productName" to={`/products/${product.slug}`}>
              <h5 className="card-title mt-3">{product.name}</h5>
            </NavLink>
            <p className="card-text priceText mt-2">$USD: {product.price}</p>
           
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
