// creating a store

import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import Reducer from './cakes/cakeReducers';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

// const store = createStore(cakeReducer);
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(logger)));

export default store;

// now provide this store to our react application 
// (in App.js file) wrap the entire code in the <Provider> passing store as a parameter.


//MIDDLEWARE: adds logs on the console