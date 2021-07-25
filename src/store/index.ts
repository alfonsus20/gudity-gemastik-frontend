import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const middleware = [thunk];

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
