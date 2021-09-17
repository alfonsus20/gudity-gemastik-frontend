import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import AddProduct from "../screens/dashboard/AddProduct";
import Analysis from "../screens/dashboard/Analysis";
import CommodityProducts from "../screens/dashboard/CommodityProducts";
import Home from "../screens/dashboard/Home";
import Prediction from "../screens/dashboard/Prediction";
import Profile from "../screens/dashboard/Profile";
import SearchCommodity from "../screens/dashboard/SearchCommodity";
import { SIDEBAR_ITEMS } from "../utils/constants";
import SuccessRatePrediction from "../screens/dashboard/SuccessRatePrediction";
import CommodityRatePrediction from "../screens/dashboard/CommodityRatePrediction";
import CommodityMap from "../screens/dashboard/CommodityMap";
import Umkm from "../screens/dashboard/Umkm";
import { motion } from "framer-motion";
import CloseButton from "../components/modal/CloseButton";
import EditProduct from "../screens/dashboard/EditProduct";

const DashboardRoutes = () => {
  const [sidebarShown, showSidebar] = React.useState<boolean>(false);

  const variants = {
    hidden: {
      left: "-100%",
    },
    visible: {
      left: "0%",
    },
  };

  return (
    <div className="flex flex-row h-full bg-blue-admin relative">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={sidebarShown ? "visible" : "hidden"}
        transition={{ stiffness: 0 }}
        className="flex-shrink-0 w-72 bg-blue-admin h-screen overflow-y-auto flex flex-col items-center fixed md:sticky top-0 -left-full md:left-0 z-30"
      >
        <CloseButton onClick={() => showSidebar(false)} className="md:hidden" />
        <div className="text-white text-2xl font-semibold mt-12 mb-8 px-4">
          <img src="/assets/pictures/logo.png" className="w-40" alt="logo" />
        </div>
        <div className=" flex flex-col w-full px-4 space-y-2 mb-4">
          {SIDEBAR_ITEMS.slice(0, 3).map((item, i) => (
            <NavLink
              key={i}
              exact={item.pathName === "/dashboard" ? true : false}
              activeStyle={{ backgroundColor: "white", color: "#2E53DA" }}
              to={item.pathName}
              onClick={() => showSidebar(false)}
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
          {SIDEBAR_ITEMS.slice(3, SIDEBAR_ITEMS.length).map((item, i) => (
            <NavLink
              key={i}
              activeStyle={{ backgroundColor: "white", color: "#2E53DA" }}
              to={item.pathName}
              onClick={() => showSidebar(false)}
              className="flex flex-row items-center px-4 py-3 w-full text-white rounded-md hover:text-blue-admin hover:bg-white"
            >
              <span className="mr-2">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </NavLink>
          ))}
        </div>
      </motion.div>
      <div className="flex-auto bg-white py-8 px-6 md:px-12 min-h-screen flex flex-col md:rounded-l-jumbo">
        <NavbarDashboard showSidebar={showSidebar} />
        <Switch>
          <Route path="/dashboard" exact component={Home} />
          <Route path="/dashboard/profil" exact component={Profile} />
          <Route path="/dashboard/umkm" exact component={Umkm} />
          <Route path="/dashboard/produk" exact component={CommodityProducts} />
          <Route
            path="/dashboard/produk/:productId/edit"
            exact
            component={EditProduct}
          />
          <Route path="/dashboard/produk/tambah" exact component={AddProduct} />
          <Route
            path="/dashboard/cari-komoditas"
            exact
            component={SearchCommodity}
          />
          <Route path="/dashboard/analisis" exact component={Analysis} />
          <Route path="/dashboard/prediksi" exact component={Prediction} />
          <Route
            path="/dashboard/prediksi/prediksi-harga"
            exact
            component={CommodityRatePrediction}
          />
          <Route
            path="/dashboard/prediksi/prediksi-kesuksesan"
            exact
            component={SuccessRatePrediction}
          />
          <Route
            path="/dashboard/peta-komoditas"
            exact
            component={CommodityMap}
          />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardRoutes;
