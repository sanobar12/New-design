import { Home } from "./Components/Home";
import { About } from "./Components/About";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";

export const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route></Route>
      </Switch>
    </Router>
  );
};

export default App;
