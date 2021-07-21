import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { Router } from "react-router-dom";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
        <App />
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
