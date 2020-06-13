import React from 'react'
import UIContextProvider from './UIContext';
import UsersContextProvider from './UsersContext';
import AuthContextProvider from './AuthContext';
import PackagesContextProvider from './PackagesContext';

function GeneralContexts(props) {
    return (
      <>
        <AuthContextProvider>
          <UsersContextProvider>
            <UIContextProvider>
              <PackagesContextProvider>
            {props.children}
            </PackagesContextProvider>
            </UIContextProvider>
          </UsersContextProvider>
        </AuthContextProvider>
      </>
    );
}

export default GeneralContexts
