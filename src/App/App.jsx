import React, {useContext } from "react";
import Routes  from './../routes/Routes';

import {AuthContext}  from "./../context/AuthContext";
import { UIContext } from './../context/UIContext';
import SideMenu from "./../components/SideMenu";
import Header from "./../components/Header";
//Pages

const App=(props)=>{
const { authed } = useContext(AuthContext);
const { sidemenu }=useContext(UIContext);
    return (
      <>
        {authed && (
          <div  className="menu">
          <SideMenu menu={sidemenu} />
          </div>
        )}
        <div className={((authed)?"authed ":"not-logedin ")+"page"}>
          {authed &&(<Header />)}
          <Routes />
          </div>
      </>
    );
}

export default App;