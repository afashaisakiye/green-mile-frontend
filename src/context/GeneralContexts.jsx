import React from 'react'
import UIContextProvider from './UIContext';
import UsersContextProvider from './UsersContext';
import AuthContextProvider from './AuthContext';

function GeneralContexts(props) {
    return (
      <>
        <AuthContextProvider>
          <UsersContextProvider>
            <UIContextProvider>
            {props.children}
            </UIContextProvider>
          </UsersContextProvider>
        </AuthContextProvider>
      </>
    );
}

export default GeneralContexts
