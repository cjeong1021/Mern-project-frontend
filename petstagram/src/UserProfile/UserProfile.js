import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = (props) => {

  return (
    <div className="userBoard">
      <div className="userInfo">
        <BiUserCircle className="userIcon" />
        <div className="user">
          <p id="userName">{props.user.name}</p>
          <Link to='/edit-profile'>
          <button className="userBtn">Edit profile</button>
          </Link>
        </div>

        <div className="postQuantity">
          <div id="post">
          <p>0</p> <p className="text">Posts</p>
          </div>

          <div id="followers">
          <p>0</p> <p className="text">Followers</p>
          </div>

          <div id="following">
          <p>0</p> <p className="text">Following</p>
          </div>
        </div>

        <div>
          <p>User Bio</p>
        </div>
      </div>

      <div className="menu">
        <p>Post</p>
        <p>Saved</p>
      </div>

      <div className="imageContainer">
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
        <img className="image" src="https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg" alt="pet" />
      </div>

    </div>
  );
};

export default UserProfile;
