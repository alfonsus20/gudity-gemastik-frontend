import { combineReducers } from "redux";
import { pastAnalysisReducer } from "./analysisReducers";
import { newsModalReducer } from "./newsReducer";
import { classifyCommodityWithImageReducer } from "./searchCommodityReducers";
import { authReducer } from "./userReducers";

const reducers = combineReducers({
  newsModal: newsModalReducer,
  auth: authReducer,
  pastPredictions: pastAnalysisReducer,
  imageClassification: classifyCommodityWithImageReducer,
});

export default reducers;
