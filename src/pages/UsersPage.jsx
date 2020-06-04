import React from 'react';
import Logout from './../components/Logout';
import Pagination from './../components/Pagination';
import UsersList from './../components/UsersList';
import CustomLink from './../components/core/Link';

function UsersPage() {
    return (
      <div className="g-col no-sumary-card">
        <div className="g-tool-bar">
          <div className="right-tools">
            <CustomLink className="btn btn-success" to="/users/add">Add Users</CustomLink>
          </div>
        </div>
        <div className="table-container">
          <UsersList />
        </div>
            <Pagination />
      </div>
    );
}

export default UsersPage
