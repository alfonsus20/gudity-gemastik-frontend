import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  const isAuthenticated = true;
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
