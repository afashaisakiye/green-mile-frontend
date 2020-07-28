import React from 'react'

const AddPackageButton = ({onClick}) => {
    return (
        <div className="add package">
            <button className="btn btn-primary" onClick={onClick}>
                <i className="fa fa-plus" aria-hidden="true"></i> <span>Ship another Package</span>
            </button>
        </div>
    )
}

export default AddPackageButton
