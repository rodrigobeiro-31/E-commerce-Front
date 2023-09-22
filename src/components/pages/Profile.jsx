import React, { useEffect, useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import ModalOrder from "../partials/ModalOrder";

function Profile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState("");
  const [show, setShow] = useState(false);
  const [selectedCart, setSelectedCart] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}/users/${user.id}`,
      data: { firstname, lastname, email, password },
    });
    navigate(`/`);
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    const getUser = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/users/${user.id}`,
      });
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
    };
    getUser();
  }, [user]);

  useEffect(() => {
    const getOrders = async () => {
      const responseOrders = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/orders/${user.id}`,
      });
      responseOrders && setOrders(responseOrders.data.orders);
    };
    getOrders();
  }, [user]);

  return (
    email && (
      <div className="container-fluid d-flex flex-column justify-content-center p-0">
        <div className="container-fluid d-flex align-items-center flex-column justify-content-center m-0 p-0 profile-banner">
          <h2 className="text-white d-flex justify-content-center align-items-center title">
            PROFILE
          </h2>
        </div>
        <div className="container">
          <div className="mb-5 m-5 p-5 text-white">
            <h2 className="text-uppercase fw-bold contact-title">My account</h2>
            <span className="line-span"></span>
            <p className="fw-normal contact-text">
              Welcome{" "}
              <span className="fw-bold span-name">
                {firstname} {lastname}!
              </span>{" "}
              From your Doppios's Account Dashboard, you have the ability to
              edit your profile and track the status of your orders.
            </p>
            <hr className="bg-white" />
            <form onSubmit={handleSubmit} className="row g-3 mb-5">
              <div className="col-6">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <LiaUserEditSolid />
                  </span>
                  <input
                    type="text"
                    className="form-control contact-input"
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <LiaUserEditSolid />
                  </span>
                  <input
                    type="text"
                    className="form-control contact-input"
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <LiaUserEditSolid />
                  </span>
                  <input
                    type="email"
                    className="form-control contact-input"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    {" "}
                    <LiaUserEditSolid />
                  </span>
                  <input
                    type="password"
                    className="form-control contact-input"
                    name="password"
                    id="password"
                    placeholder="Password..."
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end m-0 ">
                <button
                  type="submit"
                  className="d-flex align-items-center px-5 py-2 main-btn"
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
            <h2 className="text-uppercase fw-bold contact-title">
              Order tracking
            </h2>
            <span className="line-span"></span>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Products</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {console.log(orders)}
                {orders.length > 0 &&
                  orders.map((order, id) => (
                    <tr key={id}>
                      <th scope="row">{order._id}</th>
                      <td>{order.createdAt}</td>
                      <td>
                        <NavLink
                          className=""
                          onClick={() => {
                            handleShow();
                            setSelectedCart(order.cart);
                          }}
                        >
                          View products
                        </NavLink>
                      </td>
                      <td>{order.status}</td>
                      <ModalOrder
                        handleClose={handleClose}
                        show={show}
                        cart={selectedCart}
                      />
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
