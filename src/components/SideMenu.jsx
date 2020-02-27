import React from 'react'
import {Link} from 'react-router-dom'

import '../fonts/suf-icons/style'
import '../fonts/fontawesome/css/all.css'

export default function SideMenu() {
    return (
        <ul class="g-sidebar-nav">
            <li class="g-sidebar-nav-item">
                <Link className="g-sidebar-nav-link" to="/dashboard" >
                    <i class="fas fa-tachometer"></i>
                </Link>
            </li>
            <li class="g-sidebar-nav-item">
                <Link class="g-sidebar-nav-link active" to="/packages">
                <i class="fas fa-box-open"></i>
                </Link>
            </li>
            <li class="g-sidebar-nav-item">
                <Link class="g-sidebar-nav-link" to="users">
                <i class="fas fa-users"></i>
                </Link>
            </li>
        </ul>
    )
}
