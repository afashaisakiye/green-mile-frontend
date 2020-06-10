import React, { useContext } from 'react'
import { UsersContext } from './../context/UsersContext';

const RolesDropDown=({setRole})=>{
    const { usersRoles } = useContext(UsersContext)
    return (
        <div className="mb-3">
            <label htmlFor="country">Account Type</label>
            <select
              required
              onChange={setRole}
              className="custom-select"
            >
              <option value="">Choose...</option>
              {usersRoles.map((role)=>{
              return <option key={role.id} value={role.id}>{role.name}</option>
              })}
            </select>
          </div>
    )
}

export default RolesDropDown
