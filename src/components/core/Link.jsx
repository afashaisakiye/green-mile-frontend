import React from 'react'
import { Link } from 'react-router-dom';
import { UIContext } from '../../context/UIContext';
import { useContext } from 'react';

function CustomLink(props) {
    const {setPathName}=useContext(UIContext);
    return (
        <Link onClick={()=>setPathName(props.to)} {...props} >
            {props.children}
        </Link>
    )
}

export default CustomLink
