import React, {useContext } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import {AuthContext}  from "./../context/AuthContext";
import { UIContext } from './../context/UIContext';

import SideMenu from "./SideMenu";

//Pages
import SignIn from "../pages/SignIn";
import PackagesPage from "../pages/PackagesPage";
import UsersPage from "../pages/UsersPage";
import Index from "../pages/Index";
import AddUser from "./../pages/AddUser";
import NotFound from "./../pages/NotFound";
import userPage from './../pages/userPage';

export default function App(props) {
const { authed} = useContext(AuthContext);
const { sidemenu}=useContext(UIContext);
    return (
      <div className="flex-box">
        {authed && (
          <div  className="menu">
          <SideMenu menu={sidemenu} />
          </div>
        )}
        <Switch>
          <PrivateRoute exact path="/sign-in" test={!authed} redirect_to={'/'} component={SignIn}/>
          <PrivateRoute exact path="/" component={Index} test={authed} redirect_to={'/sign-in'} />
          <PrivateRoute exact path="/packages"  component={PackagesPage} test={authed} redirect_to={'/sign-in'} />
          <PrivateRoute exact path="/users" component={UsersPage} test={(authed)} redirect_to={'/sign-in'} />
          <PrivateRoute exact path="/users/add" component={AddUser} test={authed} redirect_to={'/sign-in'} />
          <PrivateRoute exact path="/user/:id" component={userPage} test={authed} redirect_to={'/sign-in'} />
          <PrivateRoute exact path="*" component={NotFound} test={authed} redirect_to={'/sign-in'} />
        </Switch>
      </div>
    );
}
