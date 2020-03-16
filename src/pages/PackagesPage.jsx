import React from 'react'
import SideMenu from '../components/SideMenu'
import PackagesSummary from '../components/SummaryCard';
import PackageList from './../components/PackageList';
import Logout from './../components/Logout';
import Pagination from '../components/Pagination';
export default function PackagesPage() {
    return (
        

        <div className="g-col" >
            <div className="g-tool-bar">
                <div>
                    
                </div>
                <Logout />
            </div>
            <div className="table-container">
                <PackageList />
                <Pagination />
            </div>
        </div>
    )
}
