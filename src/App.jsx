import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/About";
import Product from "./components/Product";
import LoginAd from "./components/admin/loginAd";
import ProductIn from "./components/admin/inProduct";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<ModalRegister />} />
        <Route path="/iniciar-sesion" element={<ModalLogin />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:slug" element={<Product />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/loginAd" element={<LoginAd />} />
        <Route path="/admin" element={<ProductIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
