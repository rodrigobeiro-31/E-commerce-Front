import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<ModalRegister />} />
        <Route path="/iniciar-sesion" element={<ModalLogin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
