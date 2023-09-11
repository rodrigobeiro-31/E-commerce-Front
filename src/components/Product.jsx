import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { BsFill0CircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import axios from "axios";

function Product() {
  const product = useSelector((state) => state.product);
  const params = useParams();
  const slug = params.slug;
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/${slug}`,
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
      });
      response && dispatch(addProduct(response.data[0]));
    };
    getProduct();
  }, []);

  return (
    product && (
      <>
        <div className="container d-flex justify-content-center align-items-center mt-5">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-6">
                <img
                  src={product.image}
                  style={{
                    maxHeight: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h5 className="text-end">{product.category}</h5>
                  <h3>{product.name}</h3>
                  <p className="card-text">{product.description}</p>
                  <p className="text-body-secondary">STOCK: {product.stock}</p>

                  <div className="d-flex justify-content-between">
                    <p className="card-text">$USD: {product.price}</p>
                    <a href="#" className="btn btn-secondary d-inline">
                      Ir al carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Infomación sobre pedidos y envios
              </Accordion.Header>
              <Accordion.Body>
                En nuestra tienda, la satisfacción del cliente es nuestra
                prioridad. Realizar un pedido es fácil y conveniente.
                Simplemente selecciona tus productos favoritos, proporciona tus
                detalles de envío y elige tu método de pago preferido. Nuestro
                equipo de expertos panaderos preparará con cariño y cuidado tus
                productos frescos antes de enviarlos de forma segura y puntual a
                tu puerta. Confía en nosotros para ofrecerte una experiencia de
                compra excepcional, donde la calidad y la frescura son lo
                primero.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Métodos de pago</Accordion.Header>
              <Accordion.Body>
                Queremos que tu experiencia de compra sea cómoda y segura.
                Ofrecemos una variedad de métodos de pago para adaptarnos a tus
                necesidades. Puedes pagar con tarjeta de crédito o débito.
                También aceptamos transferencias bancarias y, si lo prefieres,
                puedes pagar en efectivo en nuestra tienda física al momento de
                la entrega. Tu seguridad y conveniencia son fundamentales para
                nosotros, por lo que puedes elegir el método que mejor te
                convenga.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Aviso legal</Accordion.Header>
              <Accordion.Body>
                Este sitio web está diseñado para proporcionar información sobre
                nuestros productos y permitirte realizar compras en línea. Nos
                esforzamos por mantener la precisión y actualidad de la
                información, pero no garantizamos la disponibilidad constante de
                todos los productos. Además, cualquier información proporcionada
                en este sitio no debe considerarse asesoramiento legal, médico o
                profesional. Al hacer una compra, aceptas nuestros términos y
                condiciones, incluyendo nuestra política de privacidad. Si
                tienes alguna pregunta o inquietud, no dudes en contactarnos. Tu
                satisfacción es nuestra prioridad.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="container mt-5">
          <h2 className="text-center mb-3">
            Productos que te pueden interesar:
          </h2>
          <div className="row">
            <div className="col-3 mb-4">
              <div className="card">
                <img
                  src="https://unareceta.com/wp-content/uploads/2017/06/receta-de-muffins-con-pepitas-de-chocolate.jpg"
                  className="card-img-top"
                  alt="muffins"
                />
                <div className="card-body">
                  <a href="#" className="text-decoration-none text-dark">
                    <h5 className="text-center">Muffins de chocolate</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 mb-4">
              <div className="card">
                <img
                  src="https://unareceta.com/wp-content/uploads/2017/06/receta-de-muffins-con-pepitas-de-chocolate.jpg"
                  className="card-img-top"
                  alt="muffins"
                />
                <div className="card-body">
                  <a href="#" className="text-decoration-none text-dark">
                    <h5 className="text-center">Muffins de chocolate</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 mb-4">
              <div className="card">
                <img
                  src="https://unareceta.com/wp-content/uploads/2017/06/receta-de-muffins-con-pepitas-de-chocolate.jpg"
                  className="card-img-top"
                  alt="muffins"
                />
                <div className="card-body">
                  <a href="#" className="text-decoration-none text-dark">
                    <h5 className="text-center">Muffins de chocolate</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 mb-4">
              <div className="card">
                <img
                  src="https://unareceta.com/wp-content/uploads/2017/06/receta-de-muffins-con-pepitas-de-chocolate.jpg"
                  className="card-img-top"
                  alt="muffins"
                />
                <div className="card-body">
                  <a href="#" className="text-decoration-none text-dark">
                    <h5 className="text-center">Muffins de chocolate</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Product;
