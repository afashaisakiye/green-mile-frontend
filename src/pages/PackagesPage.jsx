import React from 'react'
import SideMenu from '../components/SideMenu'
import PackagesSummary from './../components/PackagesSummary';
export default function PackagesPage() {
    return (
        <div className="flex-box">
            <div className="menu">
                <SideMenu />
            </div>
            <div className="g-col" >
                <PackagesSummary />
            </div>

        </div>
    )
}
