import React from 'react'
import "../signin.scss"

export default function SignIn() {
    return (
        <form class="sign-in">
            <div class="imgcontainer">
                <img  class="img" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" alt="avatar" />
            </div>
            <div class="container">
                <label for="username"><br />Username</label>
                <input type="text" placeholder="Enter Username" name="username" required />
                <label For="password"><b>Password</b></label>
                <input type="text" placeholder="Enter Password" required />
                <button type="submit">Continue</button>

            </div>
            <div class="container">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="passsword">Forgot <a href="#">password?</a></span>

            </div>
        </form>
    )
}