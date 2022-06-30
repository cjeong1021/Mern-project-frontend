import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = ({ user, setUser }) => {
  const [post, setPost] = useState([]);

  const getUser = () => {
    axios
      .get(
        `https://petstagram-backend.herokuapp.com/petstagram/users/${user._id}`
      )
      .then((res) => {
        setUser(res.data);
      });
  };

  const getPosts = () => {
    let oldArray = [];
    const postURLs = user.posts.map((post) => {
      return axios.get(
        `https://petstagram-backend.herokuapp.com/petstagram/posts/${post}`
      );
    });

    console.log(postURLs);

    if (user.posts !== []) {
      axios
        .all(postURLs)
        .then((res) => {
          console.log(res);
          res.forEach((response) => {
            console.log(response.data);
            oldArray.push(response.data);
          });
          console.log(oldArray);
          setTimeout(() => {
            setPost(oldArray);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getPosts();
  }, [user]);

  const postPictures = post.map((post) => {
    return <img className='image' src={post.picture} alt='pet' />;
  });

  return (
    <div className='userBoard'>
      <div className='userInfo'>
        <img className='userIcon' src={user.picture} />
        <div className='user'>
          <p id='userName'>{user.name}</p>
          <Link to='/edit-profile'>
            <button className='userBtn'>Edit profile</button>
          </Link>
        </div>

        <div className='postQuantity'>
          <div id='post'>
            <p>0</p> <p className='text'>Posts</p>
          </div>

          <div id='followers'>
            <p>0</p> <p className='text'>Followers</p>
          </div>

          <div id='following'>
            <p>0</p> <p className='text'>Following</p>
          </div>
        </div>

        <div>
          <p>{user.description}</p>
        </div>
      </div>

      <div className='menu'>
        <p>Post</p>
        <p>Saved</p>
      </div>

      <div className='imageContainer'>{postPictures}</div>
    </div>
  );
};

export default UserProfile;
