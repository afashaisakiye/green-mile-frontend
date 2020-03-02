import React from 'react'
import SideMenu from '../components/SideMenu'
import PackagesSummary from './../components/PackagesSummary';
import PackageList from './../components/PackageList';
import Logout from './../components/Logout';
import Pagination from '../components/Pagination';
export default function PackagesPage() {
    return (
        <div className="flex-box">
            <div className="menu">
                <SideMenu />
                <PackagesSummary />
            </div>
            <div className="g-col" >
                <div className="g-tool-bar">
                    <Logout />
                </div>
                <div className="table-container">
                    <PackageList />
                    <Pagination />
                </div>
            </div>

        </div>
    )
}
