import React, { createContext, useState, useEffect } from "react";
import { accountTypeInfo } from "./../utils/api";
export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [authed, setAuth] = useState(false);
  const [account_type_info,setAccountTypeInfo]=useState(false);

  useEffect(() => {
    if(authed){
      (async () => {
        setAccountTypeInfo(await accountTypeInfo(authed.account_type));
      })();
    }
  }, [authed])
  return (
    <AuthContext.Provider value={{account_type_info, authed ,setAuth}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
