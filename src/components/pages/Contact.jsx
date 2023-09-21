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
          <h2 className="text-white d-flex justify-content-center align-items-center title">
            CONTACT
          </h2>
        </div>
        <div className="container mb-5 mt-5 text-white d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <div className="row contact-container ">
              <div className="col-6">
                <div className="container">
                  <div>
                    <h2 className="fw-bold pt-4 contact-title">Contact us</h2>
                    <span className="line-span"></span>
                    <p className="fw-normal contact-text mb-5">
                      We will be responding to you shortly.
                    </p>
                  </div>
                  <form onSubmit={sendForm} className="row">
                    <div className="col-6">
                      <label
                        htmlFor="firstName"
                        className="form-label contact-text"
                      >
                        Firstname :
                      </label>
                      <input
                        className="form-control contact-input mb-3"
                        name="firstname"
                        id="firstname"
                        placeholder="Firstname..."
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <label
                        htmlFor="lastname"
                        className="form-label contact-text"
                      >
                        Lastname :
                      </label>
                      <input
                        type="text"
                        className="form-control contact-input mb-3"
                        name="lastname"
                        id="lastname"
                        placeholder="Lastname..."
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <label
                        htmlFor="ilastName"
                        className="form-label contact-text"
                      >
                        Phone number :
                      </label>
                      <input
                        type="text"
                        className="form-control contact-input mb-3"
                        name="fone"
                        id="fone"
                        placeholder="Phone number..."
                        value={formData.fone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="direction"
                        className="form-label contact-text"
                      >
                        Address :
                      </label>
                      <input
                        type="name"
                        className="form-control contact-input mb-3"
                        name="direction"
                        id="direction"
                        placeholder="Address..."
                        value={formData.direction}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="fone" className="form-label contact-text">
                        Affair :
                      </label>
                      <textarea
                        type="name"
                        className="form-control contact-input mb-3"
                        name="affaire"
                        id="affaire"
                        placeholder="Affair..."
                        value={formData.affaire}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="options"
                        className="form-label contact-text"
                      >
                        Options :
                      </label>
                      <select
                        className="form-select contact-input mb-3"
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
                    <div className="col-12 d-flex justify-content-end text-center pt-1">
                      <button
                        type="submit"
                        className="m-4 text-center main-btn btn-contact"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <h2 className="fw-bold pt-4 contact-title">Locations</h2>
                  <span className="line-span"></span>
                  <p className="m-0 contact-text">
                    Mondays through Fridays from 9:00 am to 19:00 pm
                  </p>
                  <p className="m-0 contact-text">
                    Saturdays and Sundays from 9:00 am to 13:00 pm
                  </p>
                  <div className="locations-container row">
                    <div className="col-6">
                      <div className="mt-5">
                        <h5 className="contact-text fw-bold">ADDRESS</h5>
                        <p className="contact-text">Requena 2054, Montevideo</p>
                      </div>
                      <div className="mt-5">
                        <h5 className="contact-text fw-bold">PHONES</h5>
                        <p className="contact-text">099 999 999</p>
                      </div>
                      <div className="mt-5">
                        <h5 className="contact-text fw-bold">EMAILS</h5>
                        <p className="contact-text">doppios@doppios.com</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mt-5">
                        <h5 className="contact-text fw-bold">ADDRESS</h5>
                        <p className="contact-text">
                          Av Brasil 4321, Montevideo
                        </p>
                      </div>
                      <div className="mt-5">
                        <h5 className="contact-text fw-bold">PHONES</h5>
                        <p className="contact-text">2425 2345</p>
                      </div>
                      <div className="mt-5">
                        <h5 className="contact-text fw-bold">EMAILS</h5>
                        <p className="contact-text">contact@doppios.com</p>
                      </div>
                    </div>
                    <div className="col-6"></div>
                  </div>
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
