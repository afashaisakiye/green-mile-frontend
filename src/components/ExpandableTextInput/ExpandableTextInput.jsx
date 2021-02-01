import React from 'react'

const ExpandableTextInput = ({ExpandComponent,id,label,...props}) => {
    return (
    <>
    <div className="form-floating mb-3 suggestion-input">
        <div  className="suggestion-edit-button muted-text"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
        <input {...props} id={id} />
        <label htmlFor={id}>{label}</label>
        <ExpandComponent />
    </div>
    </>
    )
}

export default ExpandableTextInput
