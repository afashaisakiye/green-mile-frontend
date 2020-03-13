import React,{ useState } from 'react'
import { useContext } from 'react';
import { UIContext } from './../context/UIContext';

export default function SummaryCard() {
    const {heading,data} =useContext(UIContext)
    const total=[];
    
    if(heading==undefined){
        return <></>
    }
    
    return (
        <div className="card g-pack-sum">
            <h4>{heading}</h4>
            <ul className="g-package-status-li" >
                {data.map((info,index)=>{
                    total.push(info.number);
                    return(
                        <li key={index} >{info.title} <span className={`badge badge-${info.color}`}>{info.number}</span></li>
                    )
                })}
            </ul>
            <div className="total" ><h5>Total</h5>  <span className="badge badge-danger">{total.reduce((number,newNumber)=>number+newNumber)}</span></div>
        </div>
    )
}
