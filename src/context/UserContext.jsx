import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
        const [users, setUsers] = useState([
        {
            id:2,
            name:'Isakiye Afasha',
            role_id:3,
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
    <UserContext.Provider value={{ users }}>
        {props.children}
    </UserContext.Provider>
    );
}

export default UserContextProvider;
