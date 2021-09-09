import { combineReducers } from "redux";
import { pastAnalysisReducer } from "./analysisReducers";
import { getAllNewsReducer, newsModalReducer } from "./newsReducer";
import { futureAnalysisReducer } from "./predictionReducers";
import { classifyCommodityWithImageReducer } from "./searchCommodityReducers";
import { authReducer } from "./userReducers";
import { connectRouter } from "connected-react-router";
import { supplierDetailReducer, supplierListReducer } from "./supplierReducers";
import {
  productDetailReducer,
  supplierProductsReducer,
} from "./productReducers";
import { cartReducer } from "./cartReducers";
import { checkoutReducer } from "./checkoutReducers";
import { orderDetailReducer, orderListReducer } from "./orderReducers";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    newsModal: newsModalReducer,
    newsList: getAllNewsReducer,
    auth: authReducer,
    pastPredictions: pastAnalysisReducer,
    futurePredictions: futureAnalysisReducer,
    imageClassification: classifyCommodityWithImageReducer,
    supplierList: supplierListReducer,
    supplierDetail: supplierDetailReducer,
    productList: supplierProductsReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    orderList: orderListReducer,
    orderDetail: orderDetailReducer,
  });

export default createRootReducer;
