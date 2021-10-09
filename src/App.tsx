import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import DashboardRoutes from "./routes/DashboardRoutes";
import LandingPageRoutes from "./routes/MainRoutes";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <PrivateRoute path="/dashboard" component={DashboardRoutes} />
        <Route path="/" component={LandingPageRoutes} />
      </Switch>
    </>
  );
};

export default App;
