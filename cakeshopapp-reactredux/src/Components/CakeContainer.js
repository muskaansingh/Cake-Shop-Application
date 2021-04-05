import React from 'react';
import {buyCake} from '../redux';
import {connect} from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
// step1---- mapStateToProps: state from the redux store is mapped to the component props
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

//step2---- mapDispatchToProps: maps the dispatch of action creator to the prop in our component
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//step3 == connect these 2 functions, for that we use react connect() from react-redux library

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
