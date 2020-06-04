import React, { useContext} from 'react'
import { UserContext } from './../context/UserContext';
import CustomLink from './core/Link';

function UserListItem({user}) {
    const { userRoles,DeleteUser} = useContext(UserContext)
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
            <CustomLink to={'/user/'+user.id} >View</CustomLink>
          </div>
        </td>
      </tr>
    );
}

export default UserListItem
