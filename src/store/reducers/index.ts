import { combineReducers } from "redux";
import quickStartReducer from "./quickStartReducer";

const reducers = combineReducers({ quickStart: quickStartReducer });

export default reducers;
