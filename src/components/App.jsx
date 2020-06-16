import React, {useContext } from "react";
import Routes  from './../routes/Routes';

import {AuthContext}  from "./../context/AuthContext";
import { UIContext } from './../context/UIContext';
import SideMenu from "./SideMenu";
//Pages

export default function App(props) {
const { authed } = useContext(AuthContext);
const { sidemenu}=useContext(UIContext);
    return (
      <div className="flex-box">
        {authed && (
          <div  className="menu">
          <SideMenu menu={sidemenu} />
          </div>
        )}
          <Routes />
      </div>
    );
}
