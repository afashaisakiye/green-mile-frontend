import React ,{ useState,useEffect } from 'react'
import {Link } from 'react-router-dom'

import '../fonts/fontawesome/css/all.css'

export default function SideMenu(props) {
    const [menu, setMenu] = useState({
        active:location.pathname,
        menu_items:[
            {
                icon_class_name:"fas fa-box-open",
                link_to:"/packages"
            },
            {
                icon_class_name:"fas fa-users",
                link_to:"/users"
            }
        ]
    }
    )

    return (
        <ul className="g-sidebar-nav">
            {menu.menu_items.map((menu_item, index)=>{
                return(
                    <li key={index} onClick={()=>{setMenu({...menu, active:location.pathname})}} className="g-sidebar-nav-item">
                        <Link className={`g-sidebar-nav-link ${(menu.active==menu_item.link_to)?"active":"" }`} to={menu_item.link_to}>
                        <i className={menu_item.icon_class_name}></i>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
