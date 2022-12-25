import { legacy_createStore, applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import reducers from '../reducers/allreducers';

const middleware = [reduxThunk];

if (process.env.NODE_ENV === "development") middleware.push(logger)

const store = legacy_createStore(reducers, applyMiddleware(...middleware));

export default store;