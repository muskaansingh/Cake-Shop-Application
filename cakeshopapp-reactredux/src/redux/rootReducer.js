import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducers';
import icecreamReducer from './ice-creams/icecreamReducers';
import userReducer from './user/userReducers';


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user:userReducer
})

export default rootReducer;