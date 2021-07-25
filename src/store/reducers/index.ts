import { combineReducers } from "redux";
import { pastAnalysisReducer } from "./analysisReducers";
import { newsModalReducer } from "./newsReducer";
import { futureAnalysisReducer } from "./predictionReducers";
import { classifyCommodityWithImageReducer } from "./searchCommodityReducers";
import { authReducer } from "./userReducers";
import { connectRouter } from "connected-react-router";
import { supplierDetailReducer, supplierListReducer } from "./supplierReducers";
import { supplierProductsReducer } from "./productReducers";

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
    productList : supplierProductsReducer
  });

export default createRootReducer;
