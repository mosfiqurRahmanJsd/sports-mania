import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/league/:id">
            <LeagueDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
