import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  BrowserRouter} from "react-router-dom";
import store from './store/storeindex';

import './index.css';
import App from './App';


// import reducers from './reducers/allreducers';


// const store = configureStore(reducer)
// const store = legacy_createStore(reducers);
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>, document.getElementById('root'));


