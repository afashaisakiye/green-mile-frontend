import React from 'react'

const ExpandableTextInput = (props) => {
    return (
    <div className="form-floating mb-3 suggestion-input">
        <div onClick={props.onExpand} className="suggestion-edit-button muted-text"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
        <input {...props}  />
        <label htmlFor={props.id}>{props.label}</label>
    </div>
    )
}

export default ExpandableTextInput
