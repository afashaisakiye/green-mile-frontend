import React , { useState } from "react";
import Routes from './../routes/'
import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'

const App=(props)=>{
      const [packages, setpackages] = useState()

    return (
        <Routes />
    );
}

export default App;