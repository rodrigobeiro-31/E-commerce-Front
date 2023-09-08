import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<ModalRegister />} />
        <Route path="/iniciar-sesion" element={<ModalLogin />} />
      </Routes>
    </>
  );
}

export default App;
