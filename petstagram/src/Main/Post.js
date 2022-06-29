import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { BsBookmark, BsFillBookmarkCheckFill } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import './post.css';
import Comment from './Comment';
import axios from 'axios';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [userData, setUserData] = useState({});
  const [comments, setComments] = useState([]);
  const [commentUsers, setCommentUsers] = useState([]);

  const getUser = () => {
    axios
      .get(`http://localhost:8000/petstagram/users/${post.user}`)
      .then((res) => {
        console.log(post);
        setUserData(res.data);
        console.log(res.data);
        return axios
          .get(`http://localhost:8000/petstagram/comments/${post.comments[2]}`)
          .then((res) => {
            console.log(res.data);
            setComments([...comments, res.data]);
            console.log(comments);
          });
      });
  };

  const getComments = () => {
    let oldArray = [];
    const commentURLs = post.comments.map((comment) => {
      return axios.get(`http://localhost:8000/petstagram/comments/${comment}`);
    });
    console.log(commentURLs);

    axios.all(commentURLs).then((res) => {
      console.log(res);
      res.forEach((response) => {
        oldArray.push(response.data);
      });
      console.log(oldArray);
      setTimeout(() => {
        setComments(oldArray);
      }, 1000);
    });
  };

  useEffect(() => {
    getUser();
    getComments();
  }, []);

  useEffect(() => {
    comments.forEach((comment) => {
      axios
        .get(`http://localhost:8000/petstagram/users/${comment.user}`)
        .then((res) => {
          setCommentUsers([...commentUsers, res.data]);
        });
    });
  }, [comments]);

  const renderComments = comments.map((comment) => {
    return <p className='commentSection'>{comment.comment}</p>;
  });

  return (
    <div className='mainPost'>
      <div className='postBox'>
        <div className='postTop'>
          <Link style={{ color: 'inherit' }} to='/user/:id'>
            <BiUserCircle className='userName' size={80} />
            <p style={{ marginTop: '1.2rem' }} className='userName'>
              {userData.name}
            </p>
          </Link>
        </div>
        <img className='postImage' src={post.picture} alt='#' />
        <div className='postIcon'>
          <p className='likeButton' onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <IoIosHeart className='likeHeart' size={40} />
            ) : (
              <IoIosHeartEmpty className='likeHeart' size={40} />
            )}
          </p>
          <p className='likeButton' onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? (
              <BsFillBookmarkCheckFill className='saveButton' size={35} />
            ) : (
              <BsBookmark className='saveButton' size={35} />
            )}
          </p>
        </div>
        <div className='captionSection'>
          <strong>Likes</strong> : {post.likes}
          <br />
          <p className='caption'>
            <strong>Caption</strong> : {post.description}
          </p>
        </div>
        <div>{renderComments}</div>
        <br />
        <Comment />
      </div>
    </div>
  );
};

export default Post;
