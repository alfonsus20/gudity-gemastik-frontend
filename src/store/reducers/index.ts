import { combineReducers } from "redux";
import { pastAnalysisReducer } from "./analysisReducers";
import { newsModalReducer } from "./newsReducer";
import { futureAnalysisReducer } from "./predictionReducers";
import { classifyCommodityWithImageReducer } from "./searchCommodityReducers";
import { authReducer } from "./userReducers";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    newsModal: newsModalReducer,
    auth: authReducer,
    pastPredictions: pastAnalysisReducer,
    futurePredictions: futureAnalysisReducer,
    imageClassification: classifyCommodityWithImageReducer,
  });

export default createRootReducer;
