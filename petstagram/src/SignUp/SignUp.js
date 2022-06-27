import React from "react";
import './signUp.css'
import {Link} from 'react-router-dom'

const SignUp = (props) => {
    return(
        <div className="signUpBox">
            <div className="header">
            <h2>Sign Up</h2>
            </div>

            <div className="name">  
                <input onChange={(e) => props.handleSignUp(e)} className="nameInput" placeholder="Name" name="name" />
                <input onChange={(e) => props.handleSignUp(e)} className="ageInput" placeholder="Age" name="age" />
            </div>
                <input onChange={(e) => props.handleSignUp(e)} placeholder="Type" name="type" />
                <input onChange={(e) => props.handleSignUp(e)} placeholder="Breed" name="breed" />
                <input onChange={(e) => props.handleSignUp(e)} placeholder="Introduction" name="description" />
                <input onChange={(e) => props.handleSignUp(e)} placeholder="URL" name="picture" />
                <input onChange={(e) => props.handleSignUp(e)} placeholder="Id" name="userId" />
                <input onChange={(e) => props.handleSignUp(e)} placeholder="Password" name="password" />
                <input onChange={(e) => props.handleSignUp(e)} placeholder="Email address" name="email" />
            
            <Link to="/login">
            <button onClick={() => props.createUser()} className="submitBtn">Submit</button>
            </Link>

        </div>
    )
}

export default SignUp