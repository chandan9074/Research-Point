// import pakages
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import ServicePage from './Components/ServicePage/ServicePage';
import ActivityPage from './Components/ActivityPage/Activitypage';
import About from './Components/AboutPage/About';
import Notfound from './Components/Notfound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/home">
            <Homepage/>
          </Route>
          <Route exact path="/services">
            <ServicePage />
          </Route>
          <Route exact path="/activity">
            <ActivityPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
