import React, { useState , useContext } from "react";
import { Switch, Route } from "react-router-dom";
import AuthContextProvider from "./../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import {UIContext} from  "./../context/UIContext"
import SideMenu from "./SideMenu";
import SummaryCard from "./SummaryCard";
//Pages
import SignIn from "../pages/SignIn";
import PackagesPage from "../pages/PackagesPage";
import UsersPage  from "../pages/UsersPage"
import Index from "../pages/Index";
import CreateSuplier from "./../pages/CreateSuplier";
import NotFound from './../pages/NotFound';

export default function App(props) {
  const {pathname} = useContext(UIContext);
  
  if (pathname == "/sign-in") {

    return (
      <AuthContextProvider>
      <Switch>
          <Route path="/sign-in" exact><SignIn /></Route>
      </Switch>
      </AuthContextProvider>
    );
  } else {
    return (
        <AuthContextProvider>
          <div className="flex-box">
            <div className="menu">
              <SideMenu />
              <SummaryCard />
            </div>
            <Switch>
            <PrivateRoute exact path="/" component={Index} />
            <PrivateRoute exact path="/packages" component={PackagesPage} />
            <PrivateRoute exact path="/users" component={ UsersPage } />
            <PrivateRoute exact path="/supliers/add" component={CreateSuplier} />
            <PrivateRoute exact path='*' component={NotFound} />
            </Switch>
          </div>
        </AuthContextProvider>
    );
  }
}
