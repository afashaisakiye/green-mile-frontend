import React,{ useContext } from 'react'
import PrivateRoute from './../components/PrivateRoute';
import { Switch } from 'react-router-dom';

import NotAuthorised from "../pages/NotAuthorised";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import Index from './../pages/Index';
import LandingPage from './../pages/LandingPage';
import PackagesPage from './../pages/PackagesPage';
import UsersPage from './../pages/UsersPage';
import AddUser from './../pages/AddUser';
import userPage from './../pages/userPage';
import Logout from './../pages/Logout'



//Conxtext
import { AuthContext } from './../context/AuthContext';
import { UIContext } from './../context/UIContext';

const Routes = () => {
  const { authed } = useContext(AuthContext);
let { accessible_pages } = useContext(UIContext);
if(!accessible_pages){
  accessible_pages=[]
}
const routes = [
  {
    path: "/sign-in",
    component: SignIn,
    //tests: [{ test: (!authed),redirect: "/"}]
  },
  {
    path: "/logout",
    component: Logout,
    tests: [{ test: (authed),redirect: "/"}]
  },
  {
    path: "/",
    component: PackagesPage,
    tests: [
        {test: authed,redirect: "/sign-in"},
        { test: (accessible_pages&&accessible_pages.includes("/packages")),component: NotAuthorised}
    ],
  },
  {
    path: "/users",
    component: UsersPage,
    tests: [
        { test: authed ,redirect: "/sign-in"},
        { test: (accessible_pages&&accessible_pages.includes("/users")),component: NotAuthorised}
    ],
  },
  {
    path: "/users/add",
    component: AddUser,
    tests: [
        {test: authed,redirect: "/sign-in"},
        { test: (accessible_pages&&accessible_pages.includes("/users/add")),component: NotAuthorised}
    ],
  },
  {
    path: "/user/:id",
    component: userPage,
    tests: [
        { test: authed,redirect: "/sign-in"},
        { test: (accessible_pages&&accessible_pages.includes("/user/:id")),component: NotAuthorised}
    ]
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

/* 
//<PrivateRoute exact path="/" component={Index} test={authed} redirect_to={'/sign-in'} />
//<PrivateRoute exact path="/packages"  component={PackagesPage} test={authed} redirect_to={'/sign-in'} />
//<PrivateRoute exact path="/users" component={UsersPage} test={(authed)} redirect_to={'/sign-in'} />
//<PrivateRoute exact path="/users/add" component={AddUser} test={authed} redirect_to={'/sign-in'} />
//<PrivateRoute exact path="/user/:id" component={userPage} test={authed} redirect_to={'/sign-in'} />
 */
