import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux';

function CakeContainer(props) {
    return (
        <div>
             <h1>Number Of Cakes: {props.numOfCakes }</h1>
             <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


//map state of action creator to props
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

//map dispatch of action creator to props in the component
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
