import React ,{ useState,useContext } from 'react'
import {Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import { UIContext } from './../context/UIContext';

export default function SideMenu(props) {
    const {setPathName}=useContext(UIContext)
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
            },{
                icon_class_name:"fas fa-building",
                link_to:"/hubs"
            }
        ]
    }
    )

    return (
        <ul className="g-sidebar-nav">
            {menu.menu_items.map((menu_item, index)=>{
                return(
                    <li key={index} onClick={()=>{
                        setMenu({...menu, active:location.pathname})
                        setPathName(menu_item.link_to)
                        }} className="g-sidebar-nav-item">
                        <Link className={`g-sidebar-nav-link ${(menu.active==menu_item.link_to)?"active":"" }`} to={menu_item.link_to}>
                        <i className={menu_item.icon_class_name}></i>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
