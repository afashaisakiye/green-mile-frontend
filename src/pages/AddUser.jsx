import React, { useState, useContext, useHistory } from "react";
import { UsersContext } from "./../context/UsersContext";
import RolesDropDown from "../components/RolesDropDown";
import Input from "./../components/cores/Input";
import { addUserFeilds } from "./../utils/ui";

const AddUser = () => {
  const [newUser, setnewUser] = useState({});
  const { AddUsers } = useContext(UsersContext);
  const saveHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    AddUsers(newUser);
  };
  
  const onChangeHandler=(e)=>{
    const name=e.target.name, value= e.target.value;
    setnewUser({ ...newUser, [name]:value });
  }
  return (
    <div className="g-col no-sumary-card">
      <div className="user-form">
        <h2>Create User Account</h2>
        <form onSubmit={saveHandler}>
          <div className="row">
            <Input 
            {...addUserFeilds["first_name"]}
              onChange={onChangeHandler}
            />
            <Input
              {...addUserFeilds["last_name"]}
              onChange={onChangeHandler}
            />
          </div>
          <Input
            {...addUserFeilds["email"]}
            onChange={onChangeHandler}
          />
          <Input
            {...addUserFeilds["phone"]}
            onChange={onChangeHandler}
          />
          <RolesDropDown
            setRole={(e) => {
              setnewUser({ ...newUser, accountType: e.target.value });
            }}
          />
          {newUser.accountType == 3 && (
            <div className="suplier">
              <Input
                 {...addUserFeilds["company_name"]}
                 onChange={onChangeHandler}
              />
              <Input
                 {...addUserFeilds["company_domain"]}
                 onChange={onChangeHandler}
              />
            </div>
          )}
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
