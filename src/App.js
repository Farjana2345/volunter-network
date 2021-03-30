import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from './components/AddEvents/AddEvents';
import Home from './components/Home/Home';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addevents">Add Events</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard">
            
          </Route>
          <Route path="/addevents">
            <AddEvents></AddEvents>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
