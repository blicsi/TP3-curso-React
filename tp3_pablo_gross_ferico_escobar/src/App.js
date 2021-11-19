import './App.css'; 
import Home from './paginas/Home';
import Detalle from './paginas/Detalle';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import Navbar from './componentes/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {
  
  return (
    <>
    <Navbar />
      <Router>
      <Routes>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/detalle'>
        <Detalle />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/registro'>
        <Registro />
      </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
