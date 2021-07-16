import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import Commodity from "../screens/Commodity";
import CommodityDetail from "../screens/CommodityDetail";
import Home from "../screens/Home";
import Login from "../screens/Login";
import News from "../screens/News";
// import OrderDetail from "../screens/order/OrderDetail";
// import OrderList from "../screens/order/OrderList";
import Payment from "../screens/Payment";
import Product from "../screens/Product";
import Register from "../screens/Register";
import Umkm from "../screens/Umkm";

const LandingPageRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/berita" component={News} exact />
        <Route path="/umkm" component={Umkm} exact />
        <Route path="/komoditas" component={Commodity} exact />
        <Route path="/komoditas/:id" component={CommodityDetail} exact />
        <Route path="/produk/:id" component={Product} exact />
        <Route path="/keranjang" component={Cart} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/pembayaran" component={Payment} exact />
        {/* <Route path="/orders" component={OrderList} exact /> */}
        {/* <Route path="/orders/:id" component={OrderDetail} exact /> */}
        <Route path="/login" component={Login} exact />
        <Route path="/daftar" component={Register} exact />
      </Switch>
      <Footer />
    </>
  );
};

export default LandingPageRoutes;
