import React from 'react';
import Logout from './../components/Logout';
import Pagination from './../components/Pagination';

function UsersPage() {
    return (
            <div className="g-col" >
            <div className="g-tool-bar">
                <Logout />
            </div>
            <div className="table-container">
                users table
                <Pagination />
            </div>
        </div>
        
    )
}

export default UsersPage
