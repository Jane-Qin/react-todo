import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux"; //applyMiddleware接收中间件
import thunkMiddleware from "redux-thunk"; //处理异步action的中间件
import { Provider } from "react-redux"; //用provider传递store
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//根组件上注入store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
