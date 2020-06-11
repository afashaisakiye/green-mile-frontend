import React from 'react'

function TextInput({onChange, label, placeholder, optional}) {
    return (
        <div className="mb-3">
        <label htmlFor="email">
        <span>{label}</span> <span className="text-muted">{optional?"(optional)":""}</span>
        </label>
        <input onChange={onChange} type="text" className="form-control" placeholder={placeholder} />
      </div>
    )
}

export default TextInput
