import React, { useContext ,useState } from 'react'
import List from './../components/List';
import PackageCard from './../components/PackageCard';

import { PackagesContext } from './../context/PackagesContext';
import { AuthContext } from './../context/AuthContext';
import AddPackageButton from '../components/AddPackageButton';
import AddPackageModel from '../components/AddPackageModel/';

const PackagesPage=()=>{
    const { package_status , packages, updatePackageStatus, getNextStatuses } =useContext(PackagesContext);
    const { account_type_info } =useContext(AuthContext);
    const [addPakageModel, setaddPakageModel] = useState(false)
    const startDragCard=(e) => {
        e.dataTransfer.setData("package", e.target.id);
    }

    const dropCardInList=(e,list_id) => {
        e.preventDefault();
        const package_id = e.dataTransfer.getData("package");
        updatePackageStatus(package_id,list_id);
    }
   
    return (
        <>
        <div className="g-col no-sumary-card" >
            <div className="board">
                {package_status.map((list) => {
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

                    {(list.id==2 && account_type_info.id==3)&&(<AddPackageButton onClick={()=>setaddPakageModel(true)} />)
                    }
                    </List>;
                })
                }
            </div>
        </div>
       {(account_type_info.id==3 && addPakageModel)&&(<AddPackageModel closeAction={()=>setaddPakageModel(false)} />)}
        </>
    )
}

export default PackagesPage;