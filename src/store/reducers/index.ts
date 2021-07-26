import { combineReducers } from "redux";
import { pastAnalysisReducer } from "./analysisReducers";
import { newsModalReducer } from "./newsReducer";
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

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    newsModal: newsModalReducer,
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
  });

export default createRootReducer;
