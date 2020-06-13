import React, { createContext, useState, useEffect } from "react";
import { accountTypeInfo, signInUser } from "./../utils/api";
export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [authed, setAuth] = useState(false);
  const [account_type_info, setAccountTypeInfo] = useState(false);

  const signin = async (email, password) => {
    const loggin=await signInUser(email,password)
    if(loggin.error_msg){
      return loggin;
    }
    setAuth(loggin);
    //do all the preparation here
    return true;
  };

  useEffect(() => {
    if (authed) {
      (async () => {
        setAccountTypeInfo(await accountTypeInfo(authed.account_type));
      })();
    }
  }, [authed]);
  return (
    <AuthContext.Provider value={{ account_type_info, authed, signin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
