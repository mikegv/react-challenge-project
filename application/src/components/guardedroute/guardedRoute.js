import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 

const mapStateToProps = state => ({
    email: state.auth.email,
    isLoading: state.auth.isLoading,
})

function GuardedRoute ({ component: Component, isLoading, email, ...rest }){
    return(
        
        <Route  {...rest} 
        render =  {
            (props) => {
                if(isLoading){
                    return <div>Waiting</div>; 
                }else if(email) {
                    return <Component {...rest} {...props} />;
                }else {
                    return <Redirect to= {{path: '/', state: { from: props.location }}} />;
                }
            }
        } />
    )
        
}

export default connect(mapStateToProps)(GuardedRoute);