import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Logement from './pages/Logement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/a-propos" component={About}/>
          <Route path="/logement/:id" render={(props) => <Logement {...props}/>}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
