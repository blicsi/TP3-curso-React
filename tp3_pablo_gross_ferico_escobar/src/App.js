import logo from './logo.svg';
import './App.css'; 
import Home from './paginas/home';
import Detalle from './paginas/Detalle';
import Login from './paginas/login';
import Registro from './paginas/registro';
import Navbar from './componentes/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Navbar />
    <Switch>
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
    </Switch>
    </>
  );
}

export default App;
