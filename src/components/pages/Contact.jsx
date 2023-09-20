import React from "react";
import { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Contact() {
  // const token = useSelector((state) => state.user.token);
  // // Ahora puedes usar el token en tu componente
  // console.log("desde state token =>", token);

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
    <>
      <div className="container-fluid main-container2 p-0">
        <div className="container-fluid d-flex align-items-center flex-column justify-content-center m-0 p-0 contact-banner">
          <h2 className="text-white d-flex justify-content-center align-items-center title fw-bold">
            CONTACT
          </h2>
        </div>
        <div className="container mb-5 mt-5 contact-container custom-background text-white">
          <div className=" d-flex-column  align-self-center align-content-between">
            <div className="row">
              <div className="col-6">
                <div className="container">
                  <div>
                    <h2 className="fw-bold pt-4">Contact us</h2>
                    <p className="fw-normal">We will be responding to you shortly.</p>
                  </div>
                  <form onSubmit={sendForm} className="row g-3">
                    <div className="col-5">
                      <label htmlFor="firstName" className="form-label">
                        Firstname :
                      </label>
                      <input
                        className="form-control"
                        name="firstname"
                        id="firstname"
                        placeholder="Firstname..."
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-5">
                      <label htmlFor="lastname" className="form-label">
                        Lastname :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        placeholder="Lastname..."
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-5">
                      <label htmlFor="ilastName" className="form-label">
                        Phone number :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fone"
                        id="fone"
                        placeholder="Phone number..."
                        value={formData.fone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="direction" className="form-label">
                        Address :
                      </label>
                      <input
                        type="name"
                        className="form-control"
                        name="direction"
                        id="direction"
                        placeholder="Address..."
                        value={formData.direction}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-10">
                      <label htmlFor="fone" className="form-label">
                        Affair :
                      </label>
                      <textarea
                        type="name"
                        className="form-control"
                        name="affaire"
                        id="affaire"
                        placeholder="Affair..."
                        value={formData.affaire}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-5">
                      <label htmlFor="options" className="form-label">
                        Options :
                      </label>
                      <select
                        className="form-select"
                        type="text"
                        name="options"
                        id="options"
                        placeholder="Options..."
                        value={formData.options}
                        onChange={handleChange}
                      >
                        <option>Birthdays</option>
                        <option>Reservations</option>
                        <option>Events</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-5 text-center pt-1">
                      <button
                        type="submit"
                        className="btn  m-4 text-center btn-modal "
                      >
                        Send{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-6 d-flex-column align-self-center align-content-between">
                <div>
                  <h5 className="fw-semibold mt-3 mb-2">STORES</h5>
                  <p className="m-0">Mondays through Fridays from 9:00 am to 19:00 pm</p>
                  <p className="m-0">Saturdays and Sundays from 9:00 am to 13:00 pm</p>
                  <p className="fw-semibold ps-4 m-0 mt-2">DOPPIO'S COFFEE SHOP</p>
                  <p className="ps-5 m-0 mb-2">Requena N° 2054, Montevideo</p>
                  <p className="fw-semibold ps-4 m-0">DOPPIO'S CAFE</p>
                  <p className="ps-5 m-0 mb-2">Av. Brasil N° 4321, Montevideo</p>
                </div>
                <div>
                  <h5 className="fw-semibold mt-4 mb-2">PHONE NUMBER</h5>
                  <a href="Tel: 27777777" className="text-decoration-none text-white ps-4 m-0"><BsFillTelephoneFill className="me-2" /> 2777 7777</a>
                  <a href="Tel: 099999999" className="text-decoration-none text-white ps-4 m-0"><BsFillTelephoneFill className="me-2" /> 099 999 999</a>
                </div>
                <div>
                  <h5 className="fw-semibold mt-4 mb-2">E-MAIL</h5>
                  <p className="ps-4 m-0"><AiOutlineMail className="me-2" /> doppios@contact.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
