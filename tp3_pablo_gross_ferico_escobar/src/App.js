import Home from "./paginas/Home";
import Detalle from "./paginas/Detalle";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Navbar from "./componentes/Navbar";
import NotFound from "./paginas/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AltaProducto from "./crear_productos/AltaProducto";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detalle" exact component={Detalle} />
          <Route path="/login" exact component={Login} />
          <Route path="/registro" exact component={Registro} />
          <Route path="/altaProducto" exact component={AltaProducto}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
