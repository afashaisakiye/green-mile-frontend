import React, {useContext } from "react";
import Routes  from './../routes/Routes';

import {AuthContext}  from "./../context/AuthContext";
import { UIContext } from './../context/UIContext';
import SideMenu from "./../components/SideMenu";
//Pages

const App=(props)=>{
const { authed } = useContext(AuthContext);
const { sidemenu}=useContext(UIContext);
    return (
      <>
        {authed && (
          <div  className="menu">
          <SideMenu menu={sidemenu} />
          </div>
        )}
        <div className="page"> <Routes /></div>
      </>
    );
}

export default App;