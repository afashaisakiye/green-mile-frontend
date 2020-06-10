import React, { createContext, useState ,useContext } from "react";
import { Redirect, useLocation } from "react-router";
import { UserContext } from './UserContext';
export const UIContext = createContext();

const RemoveTrailing = pathname => {
  if (pathname != "/") {
    const regex = /\/+\s*$/g;
    if (regex.exec(pathname) !== null) {
      return pathname.replace(regex, "");
    }
  }
  return pathname;
};

function UIContextProvider(props) {
  const location = useLocation();
  const [pathname, setPathName] = useState(RemoveTrailing(location.pathname));
  const [sidemenu,setsidemenu] =useState({
    active:pathname,
    menu_items:[
      {
          icon_class_name:"fas fa-box-open",
          link_to:"/packages"
      },
      {
          icon_class_name:"fas fa-users",
          link_to:"/users"
      },
      {
          icon_class_name:"fas fa-building",
          link_to:"/hubs"
      }
  ]
  });
    return (
      <UIContext.Provider
        value={{pathname, setPathName , setsidemenu , sidemenu }}
      >
        {props.children}
      </UIContext.Provider>
    );
}

export default UIContextProvider;
