import { combineReducers } from "redux";
import { newsModalReducer } from "./newsReducer";
import { authReducer } from "./userReducers";

const reducers = combineReducers({
  newsModal: newsModalReducer,
  auth: authReducer,
});

export default reducers;
