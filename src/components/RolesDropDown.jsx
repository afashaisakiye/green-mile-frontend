import React, { useContext } from 'react'
import { UserContext } from './../context/UserContext';

const RolesDropDown=({setRole})=>{
    const { userRoles } = useContext(UserContext)
    return (
        <div className="mb-3">
            <label htmlFor="country">Account Type</label>
            <select
              required
              onChange={setRole}
              className="custom-select"
            >
              <option value="">Choose...</option>
              {userRoles.map((role)=>{
              return <option key={role.id} value={role.id}>{role.name}</option>
              })}
            </select>
          </div>
    )
}

export default RolesDropDown
