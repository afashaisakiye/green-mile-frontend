import React from 'react'
import UIContextProvider from './UIContext';
import UserContextProvider from './UserContext';
import AuthContextProvider from './AuthContext';

function GeneralContexts(props) {
    return (
      <>
        <AuthContextProvider>
          <UserContextProvider>
            <UIContextProvider>
            {props.children}
            </UIContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </>
    );
}

export default GeneralContexts
