import { combineReducers } from "redux";
import { newsModalReducer } from "./newsReducer";

const reducers = combineReducers({ newsModal: newsModalReducer });

export default reducers;
