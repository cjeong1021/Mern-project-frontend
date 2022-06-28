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
          </div>
          <div className="description">
            <h2>Description Part</h2>
          </div>
        </div>
      </div>
      <div className="shared-pictures-container">
        <div className="user-posts">
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" alt="pet" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
