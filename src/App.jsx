import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import ModalRegister from "./components/partials/ModalRegister";
import ModalLogin from "./components/partials/ModalLogin";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Product from "./components/pages/Product";

import ProductIn from "./components/admin/inProduct";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<ModalRegister />} />
        <Route path="/login" element={<ModalLogin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<ProductIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
