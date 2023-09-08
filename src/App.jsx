import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import ModalLogin from "./components/ModalLogin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/iniciar-sesion" element={<ModalLogin />} />
      </Routes>
    </>
  );
}

export default App;
