import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext}  from "./../context/AuthContext";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authed} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={
          props => (
        authed? <Component {...props} />: <Redirect to="/sign-in" />)
      }
    />
  )
};

export default PrivateRoute;