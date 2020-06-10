import React, { createContext, useState, useReducer, useEffect } from "react";

export const UsersContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return [...action.data];
    case "ADD":
      return [...state, action.user];
    case "DELETE":
      const newState=state.filter(state_item=>state_item.id!=action.user_id)
      return [...newState];
    case "UPDATE":
      return [...state];
    default:
      throw new Error();
  }
};

const UsersContextProvider=(props)=> {
  const [usersRoles, setUsersRoles] = useState([
    {
      id: 1,
      name: "Admin"
    },
    {
      id: 2,
      name: "Hub Manager"
    },
    {
      id: 3,
      name: "Suplier"
    },
    {
      id: 4,
      name: "Loader"
    }
  ]);
  const [users, userDispatch] = useReducer(userReducer, []);
  
  const AddUsers=(userData)=>{
    fetch('https://my-json-server.typicode.com/afashaisakiye/api/users', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => {
          userDispatch({type:"ADD",user:json})
        })
  }

  const DeleteUser=(user_id)=>{
    fetch('https://my-json-server.typicode.com/afashaisakiye/api/users/'+user_id, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(json => {
          userDispatch({type:"DELETE",user_id})
        })
  }

  const getUser=(user_id)=>{
    return users.filter(users=>users.id==user_id)[0]
  }
  
  //Load users on user context mouting;
  useEffect(() => {
    
  },[])

  return (
    <UsersContext.Provider value={{ users, usersRoles, AddUsers, DeleteUser,getUser,userDispatch }}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersContextProvider;
