import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import Product from "./components/Product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
