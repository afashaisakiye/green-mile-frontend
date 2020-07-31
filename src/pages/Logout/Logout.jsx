import React , { useContext } from 'react'

import { AuthContext } from './../../context/AuthContext'

const Logout = (props) => {
   const { logout} = useContext(AuthContext)
    return (
        <div>
            <p>Are you sure you want to logout ?</p>
            <a href="#">Cancel</a>
            <button onClick={()=>logout()} className="btn btn-primary" >Sure</button>
        </div>
    )
}

export default Logout
