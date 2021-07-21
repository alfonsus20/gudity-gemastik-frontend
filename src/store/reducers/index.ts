import { combineReducers } from "redux";
import { pastAnalysisReducer } from "./analysisReducer";
import { newsModalReducer } from "./newsReducer";
import { authReducer } from "./userReducers";

const reducers = combineReducers({
  newsModal: newsModalReducer,
  auth: authReducer,
  pastPredictions: pastAnalysisReducer,
});

export default reducers;
