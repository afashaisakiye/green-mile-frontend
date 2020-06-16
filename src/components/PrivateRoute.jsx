import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ test,redirect_to, component: Component, children, ...rest }) => {
  const component=(children && !Component)?children:<Component {...rest} />
  return (
      <Route {...rest} render={ props => ( test? component: <Redirect to={{ pathname: redirect_to, state: { from: props.location } }} />) }/>
  )
};

export default PrivateRoute;