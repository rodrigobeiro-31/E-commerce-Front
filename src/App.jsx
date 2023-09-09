import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<ModalRegister />} />
        <Route path="/iniciar-sesion" element={<ModalLogin />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
