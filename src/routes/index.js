import React from 'react'
import PrivateRoute from './../containers/PrivateRoute';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux'

import NotAuthorised from "./../pages/NotAuthorised";
import SignIn from "./../pages/SignIn";
import NotFound from "./../pages/NotFound";
import Index from './../pages/Index';

const Routes = () => {
const authentication = useSelector(state => state.authentication)
const routes = [
  {
    path: "/sign-in",
    component: SignIn,
    //tests: [{ test: (!authentication), redirect: "/"}]
  },
  {
    path: "/",
    component: Index,
    tests: [{ test: (authentication),component: SignIn},]
  },
  {
    path: "*",
    component: NotFound,
  }
];

return(
  <Switch>
    {routes.map((route)=>{
     return <PrivateRoute exact {...route} key={route.path}/>;
    })}
    </Switch>
)
    
}

export default Routes