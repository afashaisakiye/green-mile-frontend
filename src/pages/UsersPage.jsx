import React from 'react';
import Pagination from './../components/Pagination';
import UsersList from './../components/UsersList';
import {Link } from 'react-router-dom'

function UsersPage() {
    return (
      <div className="g-col no-sumary-card">
        <div className="g-tool-bar">
          <div className="right-tools">
            <Link className="btn btn-success" to="/users/add">Add Users</Link>
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
