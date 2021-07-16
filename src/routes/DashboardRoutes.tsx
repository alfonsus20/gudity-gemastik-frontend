import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import AddProduct from "../screens/dashboard/AddProduct";
import Commodity from "../screens/dashboard/Commodity";
import CommodityProducts from "../screens/dashboard/CommodityProducts";
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
          {SIDEBAR_ITEMS.slice(0, 2).map((item) => (
            <NavLink
              exact={item.pathName === "/dashboard" ? true : false}
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
        className="flex-auto bg-white py-8 px-12 min-h-screen flex flex-col"
        style={{ borderRadius: "5rem 0rem 0rem 5rem" }}
      >
        <NavbarDashboard />
        <Switch>
          <Route path={path} exact component={Home} />
          <Route path={`${path}/profil`} exact component={Profile} />
          <Route path={`${path}/komoditas`} exact component={Commodity} />
          <Route
            path={`${path}/komoditas/produk`}
            exact
            component={CommodityProducts}
          />
          <Route
            path={`${path}/komoditas/produk/tambah`}
            exact
            component={AddProduct}
          />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardRoutes;