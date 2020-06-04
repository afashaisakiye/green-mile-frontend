import React,{ useContext}  from 'react'
import { useParams } from 'react-router'
import { UserContext } from './../context/UserContext';
function userPage() {
    let { id } = useParams();
    const {getUser} = useContext(UserContext);
    const user=getUser(id);
    return (
        <div className="g-col no-sumary-card">
            {user.firstName +" " +user.firstName }
        </div>
    )
}

export default userPage
