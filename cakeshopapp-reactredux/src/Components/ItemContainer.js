import React from 'react';
import { connect } from 'react-redux';

function ItemContainer(props) {
    return (
        <div>
            <h1>Item : {props.item}</h1>
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

export default connect(mapStateToProps)(ItemContainer);
