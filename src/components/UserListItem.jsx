import React, { useContext} from 'react'
import { UserContext } from './../context/UserContext';

function UserListItem({user}) {
    const { userRoles } = useContext(UserContext)
    const [{name:role}]=userRoles.filter((role)=>(role.id==user.id))
    return (
        <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{role}</td>
                <td>{user.status}</td>
                <td>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    <i className="fa fa-edit" aria-hidden="true"></i>
                    <span>More...</span>
                </td>
            </tr>
    )
}

export default UserListItem
