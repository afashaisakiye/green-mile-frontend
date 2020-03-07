import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import PackagesPage from '../pages/PackagesPage';
import Index from '../pages/Index';
import CreateSuplier from './../pages/CreateSuplier';
import PrivateRoute from './PrivateRoute';


export default function App() {
  return (
    <Router>
        <Switch>
        <Route  path="/sign-in"><SignIn/></Route>
          <PrivateRoute exact path="/" authed={false} component={Index} />
          <PrivateRoute exact path="/packages" authed={false} component={PackagesPage} />
          <PrivateRoute exact path="/dashboard" authed={false} component={Dashboard} />
          <PrivateRoute exact path="/supliers/add" authed={false} component={CreateSuplier} />
        </Switch>
    </Router>
  );
}