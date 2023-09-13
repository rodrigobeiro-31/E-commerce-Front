import React from "react";
import "./brand.css";

function Brand() {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        <div className="col d-flex flex-column align-items-center p-3 custom-background1">
          <img
            src="/imgs/coffee-bean-icon (1).png"
            alt="label"
            className="img-fluid custom-image"
          />

          <h3 className="text-center mt-3">Artisanal</h3>
          <p className="text-center">
            Indulge in the artisanal excellence of our handcrafted bakery and
            café, where every creation is a true work of culinary artistry.
          </p>
        </div>
        <div
          className="col d-flex flex-column align-items-center p-3 text-white custom-background2"
         
        >
          <img
            src="/imgs/coffee-bean-icon (1).png"
            alt="label"
            className="img-fluid custom-image"
          />
          <h3 className="text-center mt-3">Natural products</h3>
          <p className="text-center">
            Experience the goodness of our all-natural products, carefully
            crafted with Mother Nature's finest ingredients for a wholesome and
            delightful culinary journey.
          </p>
        </div>
        <div
          className="col d-flex flex-column align-items-center p-3 custom-background3"
          
        >
          <img
            src="/imgs/coffee-bean-icon (1).png"
            alt="label"
            className="img-fluid custom-image"
          />
          <h3 className="text-center mt-3">Without preservatives</h3>
          <p className="text-center">
            We take pride in using only the freshest and most natural
            ingredients to create delicious treats that are free from artificial
            preservatives.
          </p>
        </div>
        <div
          className="col d-flex flex-column align-items-center p-3 text-white custom-background4"
        
        >
          <img
            src="/imgs/coffee-bean-icon (1).png"
            alt="label"
            className="img-fluid custom-image"
          />
          <h3 className="text-center mt-3">Sustainable</h3>
          <p className="text-center">
            Committed to a sustainable future, we take pride in crafting our
            products with eco-friendly practices and ingredients that prioritize
            the well-being of our planet and your health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brand;
