import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import News from "./screens/News";
import Footer from "./components/Footer";
import Umkm from "./screens/Umkm";
import ScrollToTop from "./components/ScrollToTop";
import Commodity from "./screens/Commodity";
import CommodityDetail from "./screens/CommodityDetail";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Product from "./screens/Product";
import Cart from "./screens/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/berita" component={News} exact />
        <Route path="/umkm" component={Umkm} exact />
        <Route path="/komoditas" component={Commodity} exact />
        <Route path="/komoditas/:id" component={CommodityDetail} exact />
        <Route path="/produk/:id" component={Product} exact />
        <Route path="/keranjang" component={Cart} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/daftar" component={Register} exact />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
