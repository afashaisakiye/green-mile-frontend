import React , { useState } from 'react'
import AddCard from './../AddCard'
function ColumnHeader({columnid, title, addcard}) {
    const [addingcard, toggle_adding_card] = useState(false)
    return (
        <>
        <div className={"columnheader "+ title.replace(/\s+/g, '-').toLowerCase()}>
           <div className="wrapper">
               <h4>{ title }</h4>
               <small onClick={()=>toggle_adding_card(!addingcard)} className="add-card" ><i className="fa fa-plus" aria-hidden="true"></i></small>
           </div>
        </div>
        {addingcard && <AddCard close_form={()=>toggle_adding_card(false)} />}
        </>
    )
}

export default ColumnHeader
