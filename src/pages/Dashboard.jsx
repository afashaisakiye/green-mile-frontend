import React from 'react'
import SideMenu from './../components/SideMenu';
import PackagesSummary from './../components/PackagesSummary';
import Logout from './../components/Logout';
import PackageList from './../components/PackageList';
import Pagination from './../components/Pagination';

export default function Dashboard() {
    return (
        <div  className="flex-box">
            <div className="menu">
                <SideMenu />
                <PackagesSummary />
            </div>
            <div className="g-col" >
                <div className="g-tool-bar">
                    <Logout />
                </div>
                <div className="table-container">
                   Dashboard will be here
                </div>
            </div>

        </div>
    )
}
