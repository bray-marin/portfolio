import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
