import React from 'react'
import Select from 'react-select'

const SelectPackageStatus = ({options, onSelect}) => {
    const newoptions=options.map((data)=>{
        return {value:data.id,label:data.name}
    })

    return (
        <Select className="form-control select" placeholder="Move Package" onChange={(e)=>onSelect(e)} options={newoptions} />
    )
}

export default SelectPackageStatus
