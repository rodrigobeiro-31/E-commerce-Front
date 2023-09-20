import React, { useEffect, useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
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
      console.log(user.id);
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/users/${user.id}`,
      });
      console.log(response.data);
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
    };
    getUser();
  }, [user]);

  return (
    email && (
      <div className="container mb-5 m-5 p-5 text-white bg-dark">
        <div>
          <h2 className="text-uppercase fw-bold">My account</h2>
          <p className="fw-normal">
            Welcome {firstname} {lastname}! From your Doppios's Account
            Dashboard, you have the ability to edit your profile and track the
            status of your orders.
          </p>
          <hr className="bg-white" />
        </div>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-5">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <LiaUserEditSolid />
              </span>
              <input
                type="text"
                className="form-control"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </div>

          <div className="col-5">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <LiaUserEditSolid />
              </span>
              <input
                type="text"
                className="form-control"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="col-10">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <LiaUserEditSolid />
              </span>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="col-5">
            <div className="input-group mb-3">
              <span className="input-group-text">
                {" "}
                <LiaUserEditSolid />
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-5 d-flex align-items-center justify-content-end m-0 ">
            <button
              type="submit"
              className="text-decoration-none d-flex align-items-center px-5 py-2 addToCartButton"
            >
              SAVE CHANGES
            </button>
          </div>
        </form>

        <h2 className="text-uppercase fw-bold">Order tracking</h2>
        <hr />

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Order number</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
}

export default Profile;