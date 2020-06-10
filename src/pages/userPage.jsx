import React,{ useContext}  from 'react'
import { useParams } from 'react-router'
import { UsersContext } from './../context/UsersContext';
function userPage() {
    let { id } = useParams();
    const {getUser} = useContext(UsersContext);
    const user=getUser(id);
    return (
        <div className="g-col no-sumary-card">
            {user.firstName +" " +user.firstName }
        </div>
    )
}

export default userPage
