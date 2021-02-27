import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Hotels from "./components/pages/Hotels";
import Log from "./components/pages/Log";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/log" exact component={Log} />
      </Switch>
    </Router>
  );
}

export default App;
