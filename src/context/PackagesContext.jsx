import React, { createContext, useState, useReducer,useEffect, useContext } from "react";
import { getListsForUser ,getPackagesTypes,getPackages} from './../utils/api' 
import {AuthContext}  from "./AuthContext";


export const PackagesContext = createContext();

const packageReducer=(state,action)=>{
    switch (action.type) {
        case 'ADD':
            return [...state, action.package];
            break;
        case 'REMOVE':
            const newState=state.filter(state_item=>state_item.id!=action.package_id)
            return [...newState];
            break;
        case 'REPLACE':
            return [...state.filter(_package=>_package.id!=action.updated_package.id),action.updated_package]
            break;
        case 'ADD_MANY':
            return [...state,...action.packages]
        case "SET":
            return [...action.packages];
            break;
        default:
            break;
    }
}

const PackagesContextProvider=(props)=>{
    const [package_status,set_pacake_status]=useState([]) 
    const [packages, packageDispatch] = useReducer(packageReducer,[]);
    const [package_type, set_packages_types] =useState([])
    const { authed} = useContext(AuthContext);
    
    const updatePackageStatus = (package_id ,new_status)=>{
        let new_package=packages.filter(_package=>_package.id==package_id)[0];
        new_package.status=new_status;
        packageDispatch({
            type:"REPLACE",
            updated_package:new_package
        });
    }

    const next_package_status_maker=(accumulator, currentValue) => [...accumulator,{
        "id":currentValue,
        "name":package_status.filter(
            (package_state) => package_state.id == currentValue
          )[0].display_name
    }];

    const getNextStatuses=(current_status_id)=>{
        const nextStatuses = package_status.filter(
          (package_state) => package_state.id == current_status_id
        )[0].next_statuses;
        return nextStatuses.reduce(next_package_status_maker,[]);
    }


    useEffect(() => {
        getListsForUser(authed.account_type).then((x)=>{
            set_pacake_status(x)
            getPackages(authed).then((x)=>{
                packageDispatch({
                    type:"SET",
                    packages:x
                })
            })
        })
        getPackagesTypes().then((x)=>{
            set_packages_types(x)
        })
    },[authed])

    return (<PackagesContext.Provider 
    value={{
        packageDispatch,
        packages,
        package_status,
        package_type,
        updatePackageStatus,
        getNextStatuses
    }}>
        {props.children}
        </PackagesContext.Provider>
    );
}

export default PackagesContextProvider;
