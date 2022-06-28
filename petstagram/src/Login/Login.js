import React from "react";
import "./login.css"
import {Link} from 'react-router-dom'

const Login = (props) => {
    return(
        <form className="login">
            
        <div
        className="logoBox" 
        data-aos="fade-up"
        data-aos-duration="3000">
            <h1>Petstagram</h1>
            <h4>Connect with pets on Petstagram</h4>
        </div>
        
        <div className="loginBox"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500">
            
            <input onChange={(e) => props.handleLogin(e)} placeholder="Id" name="username"/>
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