import React from "react";
import { LiaUserEditSolid } from "react-icons/lia";
function User() {
  return (
<div className="container mb-5 m-5 p-5 text-white bg-dark">
  <div>
    <h2 className="text-uppercase fw-bold">My account</h2>
    <p className="fw-normal">
      Welcome Kathia Olaverry! From your Doppios's Account Dashboard, you
      have the ability to edit your profile and track the status of your
      orders.
    </p>
    <hr className="bg-white" />
  </div>
  <form className="row g-3">
    <div className="col-5">
      <div className="input-group mb-3">
        <span className="input-group-text"><LiaUserEditSolid /></span>
        <input
          type="text"
          className="form-control"
          name="firstname"
          id="firstname"
          placeholder="Firstname..."
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
          placeholder="Lastname..."
        />
      </div>
    </div>
    <div className="col-10">
      <div className="input-group mb-3">
        <span className="input-group-text"><LiaUserEditSolid /></span>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Write your email"
        />
      </div>
    </div>

    <div className="col-5">
      <div className="input-group mb-3">
        <span className="input-group-text"> <LiaUserEditSolid /></span>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Password..."
        />
      </div>
    </div>
    <div className="col-5 d-flex align-items-center justify-content-end m-0 ">
      <a
        href="#"
        className="text-decoration-none d-flex align-items-center px-5 py-2 addToCartButton"
      >
       SAVE CHANGES
      </a>
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

  );
}

export default User;
