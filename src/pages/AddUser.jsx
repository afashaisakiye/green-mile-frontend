import React, { useState, useContext, useHistory } from "react";
import { UsersContext } from "./../context/UsersContext";
import RolesDropDown from "../components/RolesDropDown";
import Input from './../components/cores/Input';

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
          <Input  placeholder="Company.Inc" label="Comapny Name" optional={true} onChange={e =>{setnewUser({ ...newUser, companyName: e.target.value });}}  />
          <Input placeholder="Comapny Domain" label="Company domain" optional={true} onChange={e =>{setnewUser({ ...newUser, companyDomain: e.target.value });}}  />
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
          <Input half={true}  type="text"  placeholder="First name" label="First name" optional={false} onChange={e =>{setnewUser({...newUser, firstName: e.target.value });}}  />
          <Input half={true}   type="text" placeholder="Last name" label="Last name" optional={false} onChange={e =>{setnewUser({...newUser, secondName: e.target.value});}}  />
          </div>
          <Input type="text" placeholder="you@example.com" label="Email" onChange={e =>{setnewUser({ ...newUser, email: e.target.value});}}  />
          <Input type="tel" placeholder="256 782 000 000" label="Phone Number" onChange={e =>{setnewUser({  ...newUser, phone: e.target.value });}}  />
          <RolesDropDown
            setRole={e => {
              setnewUser({ ...newUser, accountType: e.target.value });
              setAccountType(e.target.value);
            }}
          />
          {x}
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
