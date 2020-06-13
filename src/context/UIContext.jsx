import React, { createContext, useState ,useContext,useEffect } from "react";
import { AuthContext } from "./AuthContext";
import {menu_items as all_menu_items} from "./../utils/ui";
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
  const [menu_items,set_menu_items] =useState([]);
  const { account_type_info } = useContext(AuthContext);

  useEffect(() => {
    if(account_type_info){
      set_menu_items(all_menu_items.filter((menu_item)=>{
        return account_type_info.page_access_level.includes(menu_item.link_to);
      }))
    }
  }, [account_type_info])
    return (
      <UIContext.Provider value={{sidemenu:{menu_items} }} >
        {props.children}
      </UIContext.Provider>
    );
}

export default UIContextProvider;
