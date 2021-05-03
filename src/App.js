import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Resource from "./cards/resource/Resource";

import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/jobs/*">
          </Route>
          <Route path="/resources/*">
            <Resource></Resource>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
