import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
