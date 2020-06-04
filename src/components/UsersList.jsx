import React ,{ useContext } from 'react'
import { UserContext } from './../context/UserContext';
import UserListItem from './UserListItem';

export default function UsersList() {
    const { users } =useContext( UserContext )
    return (
      <table className="table table-bordered table-striped table-borderless package-list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <UserListItem user={user} key={index} />;
          })}
        </tbody>
      </table>
    );
}
