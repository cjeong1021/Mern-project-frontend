import React from "react";
import { BiUserCircle } from "react-icons/bi";
import "./UserProfile.css";

const UserProfile = (props) => {
  return (
    <div>
      <div className="user-info">
        <div>
          <BiUserCircle className="userPic" size={80} />
        </div>
        <div className="userName">
          <h2>UserName</h2>
          <div className="stats">
            <h5>Posts</h5>
            <h5>Followers</h5>
            <h5>Following</h5>
          </div>
          <div className="description">
            <h2>Description Part</h2>
          </div>
        </div>
      </div>
      <div className="user-posts">Images going to be here</div>
    </div>
  );
};

export default UserProfile;
