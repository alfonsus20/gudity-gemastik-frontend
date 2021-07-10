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

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/berita" component={News} />
        <Route path="/umkm" component={Umkm} />
        <Route path="/komoditas" component={Commodity} exact/>
        <Route path="/komoditas/:id" component={CommodityDetail} exact />
        <Route path="/login" component={Login} />
        <Route path="/daftar" component={Register} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
