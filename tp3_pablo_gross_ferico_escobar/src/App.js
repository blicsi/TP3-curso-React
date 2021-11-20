import "./App.css";
import Home from "./paginas/Home";
import Detalle from "./paginas/Detalle";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Navbar from "./componentes/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import NotFound from "./paginas/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}>
          </Route>
          <Route path="/Detalle" exact component={Detalle}>
          </Route>
          <Route path="/Login" exact component={Login}>
          </Route>
          <Route path="/Registro" exact component={Registro}>
          </Route>
          <Route path="*" exact component={NotFound}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
