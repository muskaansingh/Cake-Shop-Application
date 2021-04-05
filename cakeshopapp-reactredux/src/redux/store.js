// creating a store

import {createStore} from 'redux';
// import Reducer from './cakes/cakeReducers';
import rootReducer from './rootReducer';

// const store = createStore(cakeReducer);
const store = createStore(rootReducer);

export default store;

// now provide this store to our react application 
// (in App.js file) wrap the entire code in the <Provider> passing store as a parameter.
