import React from 'react'

function TextInput({onChange, label, placeholder, optional, half}) {
    return (
        <div className={ half?"col-md-6 ":""+"mb-3"}>
        <label htmlFor="email">
        <span>{label}</span> <span className="text-muted">{optional?"(optional)":""}</span>
        </label>
        <input onChange={onChange} type="text" className="form-control" placeholder={placeholder} />
      </div>
    )
}

export default TextInput
