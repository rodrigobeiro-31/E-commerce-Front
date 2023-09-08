import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./components/About";

import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/registro" element={<ModalRegister />} />
        <Route path="/iniciar-sesion" element={<ModalLogin />} />
      </Routes>
    </>
  );
}

export default App;
