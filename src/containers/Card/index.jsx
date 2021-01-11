import React, {useState} from 'react'
import './style.scss'
function index({name ,type, size, to , dragging , onCardRemove }) {
    const [menu, setmenu] = useState(false)
    return (
        <div className="card">
              <div className="header">
                    <h4 dragging={dragging} >{name}</h4>
                    <span className="options-menu"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                    {menu&&(
                        <ul className="option-menu">
                            <li><a >delete</a></li>
                            <li><a >edit</a></li>
                        </ul>
                    )}
                </div>
           <div className="wrapper">
                <div className="body">
                    <span className="label" >Parcel</span>
                    <span>{size.weight} kg</span>
                    <div>
                        <span><span className="label" >To</span>: {to.email}</span>
                    </div>
                </div>
                <div className="footer">
             
                </div>
           </div>
        </div>
    )
}

export default index