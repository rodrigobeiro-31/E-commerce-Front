import React from "react";

function Products() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3 mb-4">
          <div class="card">
            <img
              src="https://unareceta.com/wp-content/uploads/2017/06/receta-de-muffins-con-pepitas-de-chocolate.jpg"
              className="card-img-top"
              alt="muffins"
            />
            <div className="card-body">
              <h5 className="card-title">Chocolate chip muffins</h5>
              <p className="card-text">$USD: 2.60</p>
              <a href="#" className="btn btn-secondary float-end">
                Ir al carrito
              </a>
            </div>
          </div>
        </div>

        <div className="col-3 mb-4">
          <div class="card">
            <img
              src="https://assets.elgourmet.com/wp-content/uploads/2011/09/shutterstock_1366373012-1024x683.jpg.webp"
              alt="muffins"
            />
            <div className="card-body">
              <h5 className="card-title">Medialunas</h5>
              <p className="card-text">$USD: 2.60</p>
              <a href="#" className="btn btn-secondary float-end">
                Ir al carrito
              </a>
            </div>
          </div>
        </div>

        <div className="col-3 mb-4">
          <div class="card">
            <img
              src="https://assets.unileversolutions.com/recipes-v2/38145.jpg?imwidth=2000"
              alt="muffins"
            />
            <div className="card-body">
              <h5 className="card-title">Tarta</h5>
              <p className="card-text">$USD: 2.60</p>
              <a href="#" className="btn btn-secondary float-end">
                Ir al carrito
              </a>
            </div>
          </div>
        </div>

        <div className="col-3 mb-4">
          <div class="card">
            <img
              src="https://www.elespectador.com/resizer/mwQ223VEU7Adp4Bb68ya3zAlpSg=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/LY3ZTJZS5ZBUJL63BODAZ72L7U.png"
              className="card-img-top"
              alt="muffins"
            />
            <div className="card-body">
              <h5 className="card-title">Café</h5>
              <p className="card-text">$USD: 2.60</p>
              <a href="#" className="btn btn-secondary float-end">
                Ir al carrito
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Products;
