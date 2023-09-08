import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/registro" element={<ModalRegister />} />
        <Route path="/iniciar-sesion" element={<ModalLogin />} />
      </Routes>
    </>
  );
}

export default App;
