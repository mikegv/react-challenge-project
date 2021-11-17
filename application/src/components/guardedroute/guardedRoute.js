import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 


const mapStateToProps = state => ({
    email: state.auth.email,
})

function GuardedRoute ({ path, component: Component, render, email, ...rest }){
    console.log("guarded",email);

    
            if(email){
                return(<h2>mike</h2>)
            }else{return(<Redirect to="/" />)}
    

}

export default connect(mapStateToProps)(GuardedRoute);