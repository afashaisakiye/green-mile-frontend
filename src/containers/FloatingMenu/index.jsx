import React , {useState} from 'react'
import './style.scss'

export default function index() {
    const [visibility, setvisibility] = useState(true)
    const toggle =(e) =>{
        setvisibility(!visibility)
    }
    return (
        <div className="float" >
            {visibility && (<ul>
                <li>
                    <a href="#" className="button" >
                    <span>Pacakges</span>
                    <i className="fas fa-box"></i>
                    </a>
                </li>

                <li>
                    <a href="/users" className="button" >
                        <span>Users</span>
                        <i className="fa fa-users"></i>
                    </a>
                </li>


                <li>
                    <a href="#" className="button" >
                    <span>Fleets</span>
                    <i className="fa fa-truck "></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="button" >
                    <span>logout</span>
                    <i className="fa fa-power-off"></i>
                    </a>
                </li>
            </ul>)}
            <a onClick={toggle} className="button" >
            <i className={visibility?"fa fa-times" : "fa fa-angle-up"}></i>
            </a>
        </div>
    )
}
