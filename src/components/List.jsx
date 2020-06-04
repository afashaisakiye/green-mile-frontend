import React,{useState} from "react";

function List(props) {
  return (
    <div id={props.id} onDragOver={(e)=>props.onDragOver(e)} onDrop={(e)=>props.onDrop(e,props.id)} className="package-list">
      <h2>{props.name}</h2>
      <div className="list-wrapper">
        {props.children}
      </div>
    </div>
  );
}

export default List;
