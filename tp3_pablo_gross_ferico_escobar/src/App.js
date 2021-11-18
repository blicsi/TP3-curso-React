import logo from "./logo.svg";
import "./App.css";
import Home from "./paginas/Home";
import Detalle from "./paginas/Detalle";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detalle" element={<Detalle />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
