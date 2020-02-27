import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Index() {
    let history = useHistory();
    history.push('/sign-in')
    return (
        <div>
            Index
        </div>
    )
}
