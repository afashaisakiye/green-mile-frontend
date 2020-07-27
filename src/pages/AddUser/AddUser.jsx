import React, { useState, useContext} from "react";
import { UsersContext } from "./../../context/UsersContext";
import RolesDropDown from "./../../components/RolesDropDown";
import Input from "./../../components/cores/Input";
import { addUserFeilds } from "./../../utils/ui";
import { Button } from './../../components/cores/Button';

const AddUser = () => {
  const [newUser, setnewUser] = useState({});
  const { AddUsers } = useContext(UsersContext);
  const saveHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    AddUsers(newUser);
  };
  const makeInputProps=(fieldname)=>{
      return {...addUserFeilds[fieldname],onChange:(e)=>{
        const name=e.target.name, value= e.target.value;
        setnewUser({ ...newUser, [name]:value });
      }};
  }

  return (
    <div className="g-col no-sumary-card">
      <div className="user-form">
        <h2>Create User Account</h2>
        <form onSubmit={saveHandler}>
          <div className="row">
            <Input {...makeInputProps("first_name")}  />
            <Input {...makeInputProps("last_name")} />
          </div>
          <Input {...makeInputProps("email")} />
          <Input {...makeInputProps("phone")} />
          <RolesDropDown setRole={(e) => { setnewUser({ ...newUser, accountType: e.target.value }); }} />
          {newUser.accountType == 3 && (<div className="suplier">
              <Input {...makeInputProps("company_name")} />
              <Input {...makeInputProps("company_domain")} />
            </div>)}
          <Button name="Add User" />
        </form>
      </div>
    </div>
  );
};
export default AddUser;
