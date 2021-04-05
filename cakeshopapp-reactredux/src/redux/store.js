// creating a store

import {createStore} from 'redux';
import cakeReducer from './cakes/cakeReducers';

const store = createStore(cakeReducer);

export default store;

// now provide this store to our react application 
// (in App.js file) wrap the entire code in the <Provider> passing store as a parameter.
