import React from 'react'

const AddPackageButton = ({onClick}) => {
    return (
        <div className="add package">
            <button onClick={onClick}>
                <i className="fa fa-plus" aria-hidden="true"></i> <span>Ship another Package</span>
            </button>
        </div>
    )
}

export default AddPackageButton
