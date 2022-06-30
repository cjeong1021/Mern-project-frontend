import React from "react";
import './editProfile.css'
import {Link} from 'react-router-dom'

const EditProfile = (props) => {
    console.log(props.editProfileForm);
    return(
        <div className="signUpBox">
            <div className="header">
            </div>
         <div className="signupMain">
            <div className="name">  
                <input onChange={(e) => props.handleProfileForm(e)} className="nameInput" value={`${props.editProfileForm.name}`} placeholder="Name" name="name" />
                <input onChange={(e) => props.handleProfileForm(e)} className="ageInput" value={`${props.editProfileForm.age}`} placeholder="Age" name="age" />
            </div>
                <input onChange={(e) => props.handleProfileForm(e)} placeholder="Type" value={`${props.editProfileForm.type}`} name="type" />
                <input onChange={(e) => props.handleProfileForm(e)} placeholder="Breed" value={`${props.editProfileForm.breed}`} name="breed" />
                <input onChange={(e) => props.handleProfileForm(e)} placeholder="URL" value={`${props.editProfileForm.picture}`} name="picture" />
                <input onChange={(e) => props.handleProfileForm(e)} placeholder="Id" name="username" />
                <input onChange={(e) => props.handleProfileForm(e)} placeholder="Password" name="password" />
                <input onChange={(e) => props.handleProfileForm(e)} placeholder="Email address" name="email" />
                <input onChange={(e) => props.handleProfileForm(e)} placeholder="Introduction" name="description" />
            </div>
            <Link to="/my-profile">
            <button onClick={() => props.editUser()} className="submitBtn">Submit</button>
            </Link>

        </div>
    )
}

export default EditProfile