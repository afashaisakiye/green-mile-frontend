import React from 'react';
import Logout from './../components/Logout';
import Pagination from './../components/Pagination';
import UsersList from './../components/UsersList';
import UserContextProvider from './../context/UserContext'
function UsersPage() {
    return (
            <div className="g-col" >
            <div className="g-tool-bar">
                <div className="right-tools">
                    <button className="btn btn-success">Add Users</button>
                    <input type="text" className="form-control inline" name="" id="" aria-describedby="helpId" placeholder="Search Users" />
                </div>
                <Logout />
            </div>
            <div className="table-container">
            <UserContextProvider>
            <UsersList/>
            <Pagination />
            </UserContextProvider>
            </div>
        </div>
        
    )
}

export default UsersPage
