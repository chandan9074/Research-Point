// import pakages
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import ServicePage from './Components/ServicePage/ServicePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/services">
            <ServicePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
