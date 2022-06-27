import React, { useEffect, useState } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import './post.css';
import axios from 'axios';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [userData, setUserData] = useState({});

  const getUser = () => {
    axios
      .get(`http://localhost:8000/petstagram/users/${post.user}`)
      .then((res) => {
        setUserData(res.data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className=''>
      <div className='postBox'>
        <div className='postTop'>
          <BiUserCircle className='userName' size={80} />
          <p className='userName'>{userData.name}</p>
        </div>
        <img className='postImage' src={post.picture} alt='#' />
        <div className='postIcon'>
          <p className='likeButton' onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? <IoIosHeart size={40} /> : <IoIosHeartEmpty size={40} />}
          </p>

          <BsBookmark size={35} />
        </div>
      </div>
    </div>
  );
};

export default Post;
