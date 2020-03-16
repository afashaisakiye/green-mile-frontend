import React from 'react'

export default function SignIn() {
    return (
        <form className="sign-in">
            <div className="imgcontainer">
                <img  className="img" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" alt="avatar" />
            </div>
            <div className="container">
                <label htmlFor="username"><br />Username</label>
                <input type="text" placeholder="Enter Username" name="username" required />
                <label htmlFor="password"><b>Password</b></label>
                <input type="text" placeholder="Enter Password" required />
                <button type="submit">Continue</button>

            </div>
            <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="passsword">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    )
}