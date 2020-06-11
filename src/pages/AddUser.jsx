import React, { useState, useContext, useHistory } from "react";
import { UsersContext } from "./../context/UsersContext";
import RolesDropDown from "../components/RolesDropDown";
import TextInput from './../components/cores/TextInput';

const AddUser = () => {
  const [newUser, setnewUser] = useState({});
  const [accountType, setAccountType] = useState("");
  const { AddUsers } = useContext(UsersContext);
  let x;

  const saveHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    AddUsers(newUser);
    
  };

  if (accountType == "3") {
    x = (
        <div className="suplier">
          <TextInput  placeholder="Company.Inc" label="Comapny Name" optional={true} onChange={e =>{setnewUser({ ...newUser, companyName: e.target.value });}}  />
          <TextInput placeholder="Comapny Domain" label="Company domain" optional={true} onChange={e =>{setnewUser({ ...newUser, companyDomain: e.target.value });}}  />
        </div>
    );
  }

  return (
    <div className="g-col no-sumary-card">
      <div className="user-form">
        <h2>Create User Account</h2>
        <br />
        <form onSubmit={saveHandler}>
          <div className="row">
          <TextInput half={true}  placeholder="First name" label="First name" optional={false} onChange={e =>{setnewUser({...newUser, firstName: e.target.value });}}  />
          <TextInput half={true}  placeholder="Last name" label="Last name" optional={false} onChange={e =>{setnewUser({...newUser, secondName: e.target.value});}}  />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              Email <span className="text-muted">(required)</span>
            </label>
            <input
              onChange={e => {
                setnewUser({ ...newUser, email: e.target.value });
              }}
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tel">
              Phone Number <span className="text-muted">(required)</span>
            </label>
            <input
              onChange={e => {
                setnewUser({ ...newUser, phone: e.target.value });
              }}
              type="tel"
              className="form-control"
              placeholder="256 782 000 000"
              required
            />
          </div>
          <RolesDropDown
            setRole={e => {
              setnewUser({ ...newUser, accountType: e.target.value });
              setAccountType(e.target.value);
            }}
          />
          {x}
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Add User
          </button>
        </form>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddUser;
