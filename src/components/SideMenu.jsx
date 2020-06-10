import React ,{ useState,useContext } from 'react'
import {Link } from 'react-router-dom'

export default function SideMenu({menu, updatePathName}) {
    return (
        <ul className="g-sidebar-nav">
            {menu.menu_items.map((menu_item, index)=>{
                return(
                    <li key={index} className="g-sidebar-nav-item">
                        <Link onClick={updatePathName(location.pathname)} className={`g-sidebar-nav-link ${(menu.active==menu_item.link_to)?"active":"" }`} to={menu_item.link_to}>
                        <i className={menu_item.icon_class_name}></i>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
