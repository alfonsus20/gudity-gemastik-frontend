import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }: RouteProps) => {
  const isAuthenticated = true;
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
