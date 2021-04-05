import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducers';
import icecreamReducer from './ice-creams/icecreamReducers';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

export default rootReducer;