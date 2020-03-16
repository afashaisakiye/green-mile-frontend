import React, { createContext, useState } from "react";
import {Redirect, useLocation } from "react-router";
export const UIContext = createContext();

const RemoveTrailing=(pathname)=>{
 if(pathname!="/"){
  const regex = /\/+\s*$/g;
  if((regex.exec(pathname)) !== null){
    return pathname.replace(regex,'')
  }
 }
  return pathname;
}

function UIContextProvider(props) {
  const location = useLocation();
  const [pathname, setPathName] = useState(RemoveTrailing(location.pathname));

  if(pathname===location.pathname){
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
  
    let heading;
    let data;

    switch (pathname) {
      case "/packages":
        data = packages_data;
        heading = "Packages";
        break;
      case "/users":
        data = users_data;
        heading = "Users";
        break;
      default:
        const display_side_bar = false;
        break;
    }

  return (
    <UIContext.Provider value={{pathname, setPathName, data, heading }}>
      {props.children}
    </UIContext.Provider>
  )
  }else{
    return (
      <Redirect to={ pathname} />
    )
  }
}

export default UIContextProvider;
