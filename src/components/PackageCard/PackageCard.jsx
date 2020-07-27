import React from "react";
import SelectPackageStatus from "./../SelectPackageStatus";

export default function PackageCard({_package,onDragStart,updatePackageStatus,options}) {
  return (
    <div id={_package.id} onDragStart={(e)=>onDragStart(e)} draggable="true" className="package-card">
    <div className="package-wrapper">
      <h5>#<span className="id">{_package.id} </span><span>{_package.name}</span></h5>
    </div>
    <SelectPackageStatus onSelect={updatePackageStatus} options={options} />
  </div>
  )
}
