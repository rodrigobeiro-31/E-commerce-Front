import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/products",
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);
  return (
    products && (
      <>
        <div className="container mt-5">
          <h2 className="text-center">Todos los productos</h2>
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

        <div className="container mt-5">
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
                    <NavLink to={`/productos/${product.slug}`}>
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
        </div>
      </>
    )
  );
}

export default Products;
