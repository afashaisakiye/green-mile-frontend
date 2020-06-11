import React from 'react'

function Input({onChange, label, placeholder, optional, half, type}) {
    return (
        <div className={ half?"col-md-6 ":""+"mb-3"}>
        <label htmlFor="email">
        <span>{label}</span> <span className="text-muted">{optional?"(optional)":""}</span>
        </label>
        <input  onChange={onChange} type={type} className="form-control" placeholder={placeholder} />
      </div>
    )
}

export default Input
