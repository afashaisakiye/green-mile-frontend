import React from 'react'
import {Link } from "react-router-dom";
import logo from './../../../public/img/logo.png'


const LandingPage = () => {
    return (
        <div>
            <div className="hero-conatainer">
                <img className="img" src={logo} alt="avatar" />
                <h2>Welcome to green mile, We shall transport your customer's packages gladly.</h2>
                <Link  className="login-button" to="/sign-in">GO TO LOGIN PAGE</Link>
            </div>
        </div>
    )
}

export default LandingPage
