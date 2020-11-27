import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './components/App';   
import {createStore} from 'redux';
import {Provider} from 'react-redux'; //用provider传递store
import rootReducer from './reducers/index';

const store=createStore(rootReducer);
//根组件上注入store
ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);
 
