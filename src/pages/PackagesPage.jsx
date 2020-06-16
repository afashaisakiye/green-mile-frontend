import React, { useContext } from 'react'
import List from './../components/List';
import PackageCard from './../components/PackageCard';

import { PackagesContext } from './../context/PackagesContext';
const PackagesPage=()=>{
    const { package_status , packages, updatePackageStatus, getNextStatuses } =useContext(PackagesContext);
    
    const startDragCard=(e)=>{
        e.dataTransfer.setData("package", e.target.id);
    }

    const dropCardInList=(e,list_id)=>{
        e.preventDefault();
        const package_id = e.dataTransfer.getData("package");
        updatePackageStatus(package_id,list_id);
    }
    return (
        <div className="g-col no-sumary-card" >
            <div className="board">
                { package_status.map((list)=>{
                    return <List
                        id={list.id}
                        onDragOver={(e)=>{e.preventDefault();}} 
                        onDrop={dropCardInList} key={list.id} 
                        name={list.display_name}
                    >
                    {(packages.filter((_package)=>list.id==_package.status)).map((_package)=>{
                        return <PackageCard 
                            onDragStart={startDragCard} 
                            key={_package.id}  
                            _package={_package}
                            options={getNextStatuses(_package.status)}
                            updatePackageStatus={(e)=>updatePackageStatus(_package.id,e.target.value)}
                        />
                    })}
                    </List>;
                }) }
            </div>
        </div>
    )
}

export default PackagesPage;