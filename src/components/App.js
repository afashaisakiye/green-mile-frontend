import React from "react";
import {BrowserRouter as Router,Switch,Route , useHistory } from "react-router-dom";
import SignIn from './../pages/SignIn';
import Dashboard from './../pages/Dashboard';
import PackagesPage from './../pages/PackagesPage';
import Index from './../pages/Index';


export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" >
            <Index />
          </Route>
          <Route  path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/packages">
            <PackagesPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}