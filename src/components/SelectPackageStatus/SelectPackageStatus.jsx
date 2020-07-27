import React from 'react'

const SelectPackageStatus = ({options, onSelect}) => {
    return (
        <select onChange={(e)=>onSelect(e)} defaultValue="1" name="" id="">
            <option value="1" style={{display:"none"}}  disabled>Move to</option>
            {options.map(({id,name})=>{
                return <option key={id} value={id}>{name}</option>
            })}
        </select>
    )
}

export default SelectPackageStatus
