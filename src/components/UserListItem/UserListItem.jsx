import React, { useContext} from 'react'
import { UsersContext } from './../../context/UsersContext';
import {Link } from 'react-router-dom'

function UserListItem({user}) {
    const { usersRoles,DeleteUser} = useContext(UsersContext)
    const [{name:role}]=userRoles.filter((role)=>(role.id==user.accountType))
    const delete_user=(e)=>{
      const x=confirm("Are you sure you want to delete "+user.firstName + " " + user.secondName)
      if(x){
        DeleteUser(user.id)
      }
    }
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.firstName + " " + user.secondName}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{role}</td>
        <td>
          <div className="action">
            <i onClick={delete_user} className="fa fa-trash" aria-hidden="true"></i>
            <i className="fa fa-edit" aria-hidden="true"></i>
            <Link to={'/user/'+user.id} >View</Link>
          </div>
        </td>
      </tr>
    );
}

export default UserListItem
