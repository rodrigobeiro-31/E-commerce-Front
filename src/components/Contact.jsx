import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="fluid">
      <div className="row ">
        <div className="column arriba border rounded">
          <div></div>
          <h1 className="">Contáctate con nosotros</h1>
          <h3>
            Enviá un mensaje a nuestro equipo completando el siguiente
            formulario o comunícate a través de nuestros datos de contacto
          </h3>
        </div>
        <div className="column border rounded">
          <div className="row">
            <div className="col ">
              <div className="container border rounded">
                <div>
                  <h2>
                    Envíanos un mensaje En breves te estaremos otorgando una
                    respuesta al email proporcionado.
                  </h2>
                </div>
                <form className="row g-3">
                  <div className="col-5">
                    <label
                      htmlFor="inputName"
                      name="firstName"
                      className="form-label"
                    >
                      Nombre :
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="inputName"
                    />
                  </div>
                  <div className="col-5">
                    <label htmlFor="inputPassword4" className="form-label">
                      Apellido
                    </label>
                    <input className="form-control" id="inputPassword4" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Telefono
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                      Asunto:
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      Direccion
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label">
                      Opciones:
                    </label>
                    <select id="inputState" className="form-select">
                      <option>Golozo</option>
                      <option>catering</option>
                      <option>Cumpleaños del nene</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="col border rounded bg-secondary ">
              <h2>DATOS DE CONTACTO</h2>
              <h4>Ecommerce ONLINE: todos los días</h4>
              <h4>26061980 - 093 838890 - Lun a Vie de 9:00 a 19:00 horas </h4>
              <h4>093 838890 - Sábados y Domingos de 12:00 a 19:00 horas</h4>
              <h4> 093 838890 - Sábados y Domingos de 12:00 a 19:00 horas</h4>
              <h3>ecommerce@portoMembrillo.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
