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
  return (
    <div className="g-col no-sumary-card">
      <div className="user-form">
        <h2>Create User Account</h2>
        <form onSubmit={saveHandler}>
          <div className="row">
            <Input 
            {...addUserFeilds["first_name"]}
              onChange={(e) => {
                setnewUser({ ...newUser, firstName: e.target.value });
              }}
            />
            <Input
              {...addUserFeilds["last_name"]}
              onChange={(e) => {
                setnewUser({ ...newUser, secondName: e.target.value });
              }}
            />
          </div>
          <Input
            {...addUserFeilds["email"]}
            onChange={(e) => {
              setnewUser({ ...newUser, email: e.target.value });
            }}
          />
          <Input
            {...addUserFeilds["phone"]}
            onChange={(e) => {
              setnewUser({ ...newUser, phone: e.target.value });
            }}
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
                onChange={(e) => {
                  setnewUser({ ...newUser, companyName: e.target.value });
                }}
              />
              <Input
                 {...addUserFeilds["company_domain"]}
                onChange={(e) => {
                  setnewUser({ ...newUser, companyDomain: e.target.value });
                }}
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
