import React from "react";
import './upload.css'
import {Link} from 'react-router-dom'


const PostInput = (props) => {

    return(
        <div className="postInput">
        <div className="inputBox">

            <input onChange={props.handlePostChange} placeholder="Title" name="title"/>
            <input onChange={props.handlePostChange} placeholder="Picture URL" name="picture"/>
            <input onChange={props.handlePostChange} className="description" placeholder="Description" name="description"/>

            <Link to="/main">
            <button onClick={props.saveUserPost} type='submit' className="submitBtn">Submit</button>
            </Link>
        

        </div>
        </div>
    )
}

export default PostInput