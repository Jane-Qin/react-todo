import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//compose将多个store enhancer（store增强器，增强store的功能）组合到一起的工具类方法
//applyMiddleware接收中间件
import {createStore,applyMiddleware,compose} from 'redux'; 
import thunkMiddleware from 'redux-thunk';  //处理异步action的中间件
import {Provider} from 'react-redux'; //用provider传递store
import rootReducer from './reducers/index';
import loggerMiddleware from "./middlewares/logger";  // //引入自己写的中间件
import loggerEnhancer from "./enhancers/logger"; //引入自己写的enhancer

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware),loggerEnhancer)); 
//根组件上注入store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
