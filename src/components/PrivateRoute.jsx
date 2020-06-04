import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ test,redirect_to, component: Component, children, ...rest }) => {
  if(children && !Component){
    return (
      <Route {...rest} render={ props => ( test? children: <Redirect to={{ pathname:redirect_to, state: { from: props.location } }} />) } />
    )
  }
  return (
    <Route
      {...rest}
      render={ props => ( test? <Component {...props} />: <Redirect to={{ pathname: redirect_to, state: { from: props.location } }} />) }
    />
  )
};

export default PrivateRoute;