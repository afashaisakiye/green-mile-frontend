import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [authed, setAuth] = useState(true);

  return (
    <AuthContext.Provider value={{authed}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
