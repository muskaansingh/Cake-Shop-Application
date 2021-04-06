import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux'


function UserContainer({userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [ ])   // this empty dependency array is used to dispatch the fetchUsers action creator only once.

    {/* render data to the UI */}

    return  userData.loading ?
             (<h2>Loading!</h2>) 
            : userData.error ? 
             (<h2>{userData.error}</h2>)
            : (
                <div>
                    <h1>USER LIST</h1>
                    <div>
                        {userData && 
                        userData.users &&
                        userData.users.map(user => <div>
                                                        <p> <b> UserName:</b> {user.name}</p>
                                                        <p> <b> Email:</b> {user.email}</p>
                                                        <hr/>
                                                    </div>)} 
                    </div>
                </div>
        )
}

const mapStateToProps = (state) => {
    return{
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers: () => dispatch(fetchUsers())  // dispatch the fetchUsers action creator
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
