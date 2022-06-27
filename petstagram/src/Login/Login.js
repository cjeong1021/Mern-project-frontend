import React from "react";
import "./login.css"
import {Link} from 'react-router-dom'

const Login = (props) => {
    return(
        <form className="login">
        <div className="loginBox">
            
            <input onChange={(e) => props.handleLogin(e)} placeholder="Id" name="userId"/>
            <input onChange={(e) => props.handleLogin(e)} placeholder="Password" name="password"/>

            <Link to="/main">
            <button className="loginBtn" onClick={(e) => props.validateLogin(e)}>Log In</button>
            </Link>
            
            <Link to="/sign-up">
            <button className="newAccountBtn">Sign Up</button>
            </Link>

        </div>
        </form>
    )
}

export default Login