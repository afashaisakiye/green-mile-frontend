import React from 'react'
import {Link} from 'react-router-dom'

import '../fonts/suf-icons/style'
import '../fonts/fontawesome/css/all.css'

export default function SideMenu() {
    return (
        <ul className="g-sidebar-nav">
            <li className="g-sidebar-nav-item">
                <Link className="g-sidebar-nav-link" to="/dashboard" >
                    <i className="fas fa-tachometer"></i>
                </Link>
            </li>
            <li className="g-sidebar-nav-item">
                <Link className="g-sidebar-nav-link active" to="/packages">
                <i className="fas fa-box-open"></i>
                </Link>
            </li>
            <li className="g-sidebar-nav-item">
                <Link className="g-sidebar-nav-link" to="users">
                <i className="fas fa-users"></i>
                </Link>
            </li>
        </ul>
    )
}
