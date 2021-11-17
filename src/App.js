import './Styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Navbar from './NavBar/NavBar';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/About" exact> 
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
