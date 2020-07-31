import React from 'react'
import UIContextProvider from './../UIContext';
import UsersContextProvider from './../UsersContext';
import AuthContextProvider from './../AuthContext';
import PackagesContextProvider from './../PackagesContext';

function GeneralContexts(props) {
  return (
    <>
      <AuthContextProvider>
        <UIContextProvider>
          <UsersContextProvider>
            <PackagesContextProvider>
              {props.children}
            </PackagesContextProvider>
          </UsersContextProvider>
        </UIContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default GeneralContexts
