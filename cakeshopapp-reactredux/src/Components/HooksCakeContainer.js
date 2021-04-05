import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux';


function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <hr/>
            <h1>Using Hooks!</h1>
            <h3>Number Of Cakes: {numOfCakes}</h3>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;

//using hooks with redux -- no need to use connect func.
