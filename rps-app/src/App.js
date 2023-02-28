import Home from "./Home";
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Game from "./Game";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/rps">
              <Game/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
