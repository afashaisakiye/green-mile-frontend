import React from 'react'

const Input=({onChange, label, placeholder, optional, half, type ,name}) => {
    return (
        <div className={ half?"col-md-6 ":""+"mb-3"}>
        <label htmlFor="email">
        <span>{label}</span> <span className="text-muted">{optional?"(optional)":""}</span>
        </label>
        <input name={name}  onChange={onChange} type={type} className="form-control" placeholder={placeholder} />
      </div>
    )
}

export default Input
