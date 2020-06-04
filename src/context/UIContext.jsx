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
    return (
      <UIContext.Provider
        value={{pathname, setPathName }}
      >
        {props.children}
      </UIContext.Provider>
    );
}

export default UIContextProvider;
