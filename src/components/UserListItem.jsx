import React from 'react'

function UserListItem({user}) {
    return (
        <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.role_id}</td>
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
