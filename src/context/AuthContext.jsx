import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [authed, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{authed ,setAuth}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
