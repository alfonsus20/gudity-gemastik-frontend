import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  
  return (
    <div className="">
      <div></div>
      <Switch>
        <Route
          path={path}
          exact
          component={() => <div className="mt-24">main</div>}
        />
        <Route
          path={`${path}/profile`}
          exact
          component={() => <div className="mt-24">profil</div>}
        />
        <div className="mt-24">profile</div>
      </Switch>
    </div>
  );
};

export default DashboardRoutes;
