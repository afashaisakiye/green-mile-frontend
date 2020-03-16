import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
    const [userRoles, setRoles]= useState([
        {
            id:1,
            name:"Admin",
        },
        {
            id:2,
            name:"Hub Manager"
        },
        {
            id:3,
            name:"Suplier"
        },
        {
            id:4,
            name:"Loader"
        }
    ])
    const [users, setUsers] = useState([
        {
            id:2,
            name:'Isakiye Afasha',
            role_id:4,
            email:'afashaisakiye@gmail.com',
            phone:'256783062777',
            status:'pending'
        },
        {
            id:1,
            name:'Lubanga Rogers',
            role_id:3,

            email:'luba@gmail.com',
            phone:'256783062677',
            status:'active'
        }
    ]);

    return (
    <UserContext.Provider value={{ users , userRoles }}>
        {props.children}
    </UserContext.Provider>
    );
}

export default UserContextProvider;
