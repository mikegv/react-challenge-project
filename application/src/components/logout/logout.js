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
        this.props.history.push("/")
        this.props.commenceLogout()
    }
    render(){
        return(
            <div>
            </div> 
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Logout);
    