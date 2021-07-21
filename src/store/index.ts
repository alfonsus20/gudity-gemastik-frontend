import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const middleware = [thunk];

export const history = createBrowserHistory();

export default function configureStore(preloadedState: any) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), ...middleware)
    )
  );
  return store;
}

// @ts-ignore
export type RootState = ReturnType<typeof configureStore.getState>;
// @ts-ignore
export type AppDispatch = ReturnType<typeof configureStore.dispatch>;
