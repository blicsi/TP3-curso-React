

import Home from "./paginas/Home";
import Detalle from "./paginas/Detalle";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Navbar from "./componentes/navbar";
import NotFound from "./paginas/NotFound"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

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
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
