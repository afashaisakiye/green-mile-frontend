import React from 'react'
import "../signin.scss"

export default function SignIn() {
    return (
        <form action="action_page.php" method="post">
            <div class="container">
                <label for="username"><br />Username</label>
                <input type="text" placeholder="Enter Username" name="username" required />
                <label For="password"><b>Password</b></label>
                <input type="text" placeholder="Enter Password" required />
                <button type="submit">SignIn</button>

            </div>
            <div class="container">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="passsword">Forgot <a href="#">password?</a></span>

            </div>
        </form>
    )
}