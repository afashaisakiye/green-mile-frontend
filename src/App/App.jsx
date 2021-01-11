import React , { useState } from "react";
import Routes from './../routes/'
import { useSelector } from 'react-redux'

import FloatingMenu from './../containers/FloatingMenu'

const App=(props)=>{
    const authentication = useSelector(state => state.authentication)

    return (
        <>
        <Routes />
            {authentication&&<FloatingMenu />}
        </>
    );
}

export default App;