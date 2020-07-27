import React from 'react'
import {NavLink } from 'react-router-dom'

export default function SideMenu({menu}) {
    return (
        <ul className="g-sidebar-nav">
            {menu.menu_items.map((menu_item, index)=>{
                return(
                    <li key={index} className="g-sidebar-nav-item">
                        <NavLink activeClassName="active" className="g-sidebar-nav-link" exact  to={menu_item.link_to}>
                        <i className={menu_item.icon_class_name}></i>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}
