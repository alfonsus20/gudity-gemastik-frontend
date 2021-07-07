import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducers from "./reducers";

const middleware = [thunk];

const store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootStore = ReturnType<typeof RootReducers>;

export default store;
