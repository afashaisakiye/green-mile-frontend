import React from 'react'

export default function UsersList() {
    return (
        <table className="table table-bordered table-striped table-borderless package-list">
        <thead>
            <tr>
            <th >Id</th>
            <th >Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th >Role</th>
            <th >Status</th>
            <th >Actions</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>23</td>
                <td>Isakiye Afasha</td>
                <td>25678306277</td>
                <td>Kampala</td>
                <td>Admin</td>
                <td>pending</td>
                <td>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    <i className="fa fa-edit" aria-hidden="true"></i>
                     <span>More...</span>
                </td>
            </tr>

        </tbody>
    </table>
    )
}
