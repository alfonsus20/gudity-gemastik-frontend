import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Home from "../screens/dashboard/Home";
import Profile from "../screens/dashboard/Profile";
import { SIDEBAR_ITEMS } from "../utils/constants";

const DashboardRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <div className="flex flex-row min-h-screen bg-blue-admin relative">
      <div className="flex-shrink-0 w-72 bg-blue-admin h-screen overflow-y-auto flex flex-col items-center sticky top-0 left-0 ">
        <div className="text-white text-2xl font-semibold mt-12 mb-8">LOGO</div>
        <div className=" flex flex-col w-full px-4 space-y-2 mb-4">
          {SIDEBAR_ITEMS.slice(0, 3).map((item) => (
            <NavLink
              exact
              activeStyle={{ backgroundColor: "white", color: "#2E53DA" }}
              to={item.pathName}
              className="flex flex-row items-center px-4 py-3 w-full text-white rounded-md hover:text-blue-admin hover:bg-white"
            >
              <span className="mr-2">{item.icon}</span>{" "}
              <span className="text-sm">{item.text}</span>
            </NavLink>
          ))}
        </div>
        <div className="w-full">
          <p className="text-left text-xs text-white border-t-2 border-white mx-4 py-3">
            Aplikasi Tools
          </p>
        </div>
        <div className=" flex flex-col w-full px-4 space-y-2">
          {SIDEBAR_ITEMS.slice(2, SIDEBAR_ITEMS.length).map((item) => (
            <NavLink
              activeStyle={{ backgroundColor: "white", color: "#2E53DA" }}
              to={item.pathName}
              exact
              className="flex flex-row items-center px-4 py-3 w-full text-white rounded-md hover:text-blue-admin hover:bg-white"
            >
              <span className="mr-2">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div
        className="flex-auto bg-white py-8 px-12"
        style={{ borderRadius: "5rem 0rem 0rem 5rem" }}
      >
        <NavbarDashboard />
        <Switch>
          <Route path={path} exact component={Home} />
          <Route path={`${path}/profile`} exact component={Profile} />
          <div className="mt-24">profile</div>
        </Switch>
      </div>
    </div>
  );
};

export default DashboardRoutes;
