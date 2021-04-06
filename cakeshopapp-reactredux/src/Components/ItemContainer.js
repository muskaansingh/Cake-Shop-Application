import React from 'react';
import { connect } from 'react-redux';
import {buyCake, buyIcecream} from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h1>Item : {props.item}</h1>
            <button onClick={props.buyItem}> Buy Items!</button>
        </div>
    )
}

//mapStateToProps: takes its own props as a second parameter

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams
    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())
    return{
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
