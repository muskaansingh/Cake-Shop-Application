import React from 'react';
import {buyIcecream} from '../redux';
import {connect} from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Ice-cream: {props.numOfIcecreams}</h2>
            <button onClick={props.buyIcecream}>Buy Ice-cream</button>
        </div>
    )
}
// step1---- mapStateToProps: state from the redux store is mapped to the component props
const mapStateToProps = (state) => {
    return {
        numOfIcecreams: state.icecream.numOfIcecreams
    }
}

//step2---- mapDispatchToProps: maps the dispatch of action creator to the prop in our component
const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch((buyIcecream()))
    }
}

//step3 == connect these 2 functions, for that we use react connect() from react-redux library

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
