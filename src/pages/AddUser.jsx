import React, { useState, useContext, useHistory } from "react";
import { UsersContext } from "./../context/UsersContext";
import RolesDropDown from "../components/RolesDropDown";

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
      <div>
        <div className="suplier">
          <div className="mb-3">
            <label htmlFor="email">
              Company <span className="text-muted">(Optional)</span>
            </label>
            <input
              onChange={e => {
                setnewUser({ ...newUser, companyName: e.target.value });
              }}
              type="text"
              className="form-control"
              placeholder="Company.Inc"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              Company domain<span className="text-muted">(Optional)</span>
            </label>
            <input
              onChange={e => {
                setnewUser({ ...newUser, companyDomain: e.target.value });
              }}
              type="text"
              className="form-control"
              placeholder="Comapny Domain"
            />
          </div>
        </div>
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
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First name</label>
              <input
                onChange={e => {
                  setnewUser({ ...newUser, firstName: e.target.value });
                }}
                type="text"
                className="form-control"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
                onChange={e => {
                  setnewUser({ ...newUser, secondName: e.target.value });
                }}
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                required
              />
            </div>
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
