import React from "react";
import { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Contact() {
  /* const token = useSelector((state) => state.user.token); */
  // Ahora puedes usar el token en tu componente
  /* console.log("desde state token =>", token); */

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    fone: "",
    direction: "",
    affaire: "",
    options: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud POST utilizando Axios
      const response = await axios.post(
        "http://localhost:3000/user/contact",
        formData,
        {
          /* headers: {
            Authorization: `Bearer ${token}`,
          }, */
        }
      );

      // Haz algo con la respuesta, como mostrarla en la consola
      console.log(response.data);
      setFormData({
        firstname: "",
        lastname: "",
        fone: "",
        direction: "",
        affaire: "",
        options: "",
      });
    } catch (error) {
      // Maneja errores, por ejemplo, mostrándolos en la consola
      console.error(error);
    }
  };

  return (
    <div className="column arriba  ">
      <div className=" d-flex-column  align-self-center align-content-between blur ">
        <h1 className="">Contáctate con nosotros</h1>

        <div className="row">
          <div className="col-6">
            <div className="container ">
              <div>
                <h2 className="mt-5">Envíanos un mensaje.</h2>
                <h3>En breves te estaremos respondiendo</h3>
              </div>
              <form onSubmit={sendForm} className="row g-3">
                <div className="col-5">
                  <label htmlFor="firstName" className="form-label">
                    Nombre :
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    placeholder="Nombre..."
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="lastname" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    placeholder="Apellido.."
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="ilastName" className="form-label">
                    Telefono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fone"
                    id="fone"
                    placeholder="telefono..."
                    value={formData.fone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="direction" className="form-label">
                    Direccion
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    name="direction"
                    id="direction"
                    placeholder="Dirección..."
                    value={formData.direction}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-10">
                  <label htmlFor="fone" className="form-label">
                    Asunto:
                  </label>
                  <textarea
                    type="name"
                    className="form-control"
                    name="affaire"
                    id="affaire"
                    placeholder="Asunto..."
                    value={formData.affaire}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="options" className="form-label">
                    Opciones:
                  </label>
                  <select
                    className="form-select"
                    type="text"
                    name="options"
                    id="options"
                    placeholder="Dirección..."
                    value={formData.options}
                    onChange={handleChange}
                  >
                    <option>Golozo</option>
                    <option>catering</option>
                    <option>Cumpleaños del nene</option>
                    <option>divorcio top</option>
                  </select>
                </div>
                <div className="col-5 text-center mt-5 pt-4 ">
                  <button
                    type="submit"
                    className="btn  m-4 text-center btn-modal "
                  >
                    Enviar{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col  d-flex-column  align-self-center align-content-between blur ">
            <h1 className="m-5"> DATOS DE CONTACTO</h1>
            <h4 className="m-3"> E-commerce ONLINE: todos los días</h4>
            <h4 className="m-3">
              26061980 - 093 838890 - Lun a Vie de 9:00 a 19:00 horas{" "}
            </h4>
            <h4 className="m-3">
              093 838890 - Sábados y Domingos de 12:00 a 19:00 horas
            </h4>

            <h3 className="m-5">Ecommerce@doppios.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
