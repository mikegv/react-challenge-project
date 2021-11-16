import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { logoutUser } from '../../redux/actions/authActions'

const mapActionsToProps = dispatch => ({
    commenceLogout(){
        dispatch(logoutUser())
    }
  })

const mapStateToProps = (state) => ({
    auth: state.auth,
})


class Logout extends Component{
    componentDidMount(){
        this.props.commenceLogout()
        setTimeout(() => {
        window.location.replace("/")
        }, 500);
    }
    render(){
        return(
            <div>
                <h2>Logging out</h2>
            </div>
        )
        
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Logout);
    
