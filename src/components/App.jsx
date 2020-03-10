import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";
import AuthContextProvider from "./../context/AuthContext";
import SignIn from "../pages/SignIn";
import PackagesPage from "../pages/PackagesPage";
import Index from "../pages/Index";
import CreateSuplier from "./../pages/CreateSuplier";
import PrivateRoute from "./PrivateRoute";
import SideMenu from "./SideMenu";
import SummaryCard from "./SummaryCard";

export default function App(props) {
  const location = useLocation();
  const [packages_data, setPackagesData] = useState([
    {
      title: "To City Hub",
      number: 6,
      color: "primary"
    },
    {
      title: "Rebundling",
      number: 7,
      color: "secondary"
    },
    {
      title: "On Fleet",
      number: 4,
      color: "info"
    },
    {
      title: "Delivered",
      number: 3,
      color: "success"
    }
  ]);

  const [users_data, setUsersData] = useState([
    {
      title: "Admins",
      number: 2,
      color: "primary"
    },
    {
      title: "Supliers",
      number: 3,
      color: "secondary"
    },
    {
      title: "Loaders",
      number: 9,
      color: "info"
    }
  ]);
  let sumaryHeading;
  let data;
  switch (location.pathname) {
    case "/packages":
      data = packages_data;
      sumaryHeading = "Packages";
      break;
    case "/users":
      data = users_data;
      sumaryHeading = "Users";
      break;
    default:
      const display_side_bar = false;
      break;
  }
  if (location.pathname == "/sign-in") {
    return (
      <Switch>
        <AuthContextProvider>
          <Route path="/sign-in" exact>
            <SignIn />
          </Route>
        </AuthContextProvider>
      </Switch>
    );
  } else {
    return (
      <Switch>
        <AuthContextProvider>
          <div className="flex-box">
            <div className="menu">
              <SideMenu />
              <SummaryCard heading={sumaryHeading} data={data} />
            </div>
            <PrivateRoute exact path="/" component={Index} />
            <PrivateRoute exact path="/packages" component={PackagesPage} />
            <PrivateRoute
              exact
              path="/supliers/add"
              component={CreateSuplier}
            />
          </div>
        </AuthContextProvider>
      </Switch>
    );
  }
}
