import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import DashboardRoutes from "./routes/DashboardRoutes";
import LandingPageRoutes from "./routes/LandingPageRoutes";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/dashboard" component={DashboardRoutes}/>
        <Route path="/" component={LandingPageRoutes} />
      </Switch>
    </>
  );
};

export default App;
