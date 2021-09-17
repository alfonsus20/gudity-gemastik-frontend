import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import Commodity from "../screens/Supplier";
import CommodityDetail from "../screens/SupplierDetail";
import Home from "../screens/Home";
import Login from "../screens/Login";
import News from "../screens/News";
import OrderDetail from "../screens/order/OrderDetail";
import OrderList from "../screens/order/OrderList";
import Payment from "../screens/Payment";
import Product from "../screens/Product";
import Register from "../screens/Register";
import Umkm from "../screens/Umkm";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/NotFound";
import Review from "../screens/Review";

const LandingPageRoutes = () => {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/berita" component={News} exact />
          <Route path="/umkm" component={Umkm} exact />
          <Route path="/suppliers" component={Commodity} exact />
          <Route path="/suppliers/:id" component={CommodityDetail} exact />
          <Route
            path="/suppliers/:supplierId/produk/:productId"
            component={Product}
            exact
          />
          <PrivateRoute path="/keranjang" component={Cart} exact />
          <PrivateRoute path="/checkout" component={Checkout} exact />
          <PrivateRoute
            path="/pembayaran/:paymentCode"
            component={Payment}
            exact
          />
          <PrivateRoute path="/orders" component={OrderList} exact />
          <PrivateRoute
            path="/orders/:paymentCode"
            component={OrderDetail}
            exact
          />
          <PrivateRoute
            path="/orders/:orderId/review"
            component={Review}
            exact
          />
          <AuthRoute path="/login" component={Login} exact />
          <AuthRoute path="/daftar" component={Register} exact />{" "}
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default LandingPageRoutes;
