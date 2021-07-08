import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import News from "./screens/News";
import Footer from "./components/Footer";
import Umkm from "./screens/Umkm";
import ScrollToTop from "./components/ScrollToTop";
import Commodity from "./screens/Commodity";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/berita" component={News} />
        <Route path="/umkm" component={Umkm} />
        <Route path="/komoditas" component={Commodity} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
