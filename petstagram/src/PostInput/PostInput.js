import React from "react";
import './postInput.css'
import {Link} from 'react-router-dom'


const PostInput = (props) => {

    return(
        <div className="inputBox">

            <input onChange={props.handlePostChange} placeholder="Title" name="title"/>
            <input onChange={props.handlePostChange} placeholder="Date" name="date"/>
            <input onChange={props.handlePostChange} className="description" placeholder="Description" name="description"/>

            <Link to="/main">
            <button onClick={props.saveUserPost} type='submit' className="submitBtn">Submit</button>
            </Link>
        

        </div>
    )
}

export default PostInput