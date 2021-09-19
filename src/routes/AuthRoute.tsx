import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";
import { RootState } from "../store";

const AuthRoute = ({ component: Component, ...rest }: RouteProps) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { pathname } = useLocation();

  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: pathname } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRoute;
