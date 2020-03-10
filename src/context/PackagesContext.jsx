import React, { createContext, useState } from "react";

export const PackagesContext = createContext();

function PackagesContextProvider(props) {
const [packages, setPackages] = useState(true);
    return (
        <PackagesContext.Provider value={{packages}}>
            {props.children}
        </PackagesContext.Provider>
    );
}

export default PackagesContextProvider;
