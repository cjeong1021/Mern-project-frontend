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
  const [likes, setLikes] = useState(0)
console.log(post)

  const commentData = post.comments.map((comment) => {
    return comment;
  });


  const getUser = () => {
    axios
      .get(`http://localhost:8000/petstagram/users/${post.user}`)
      .then((res) => {
        console.log(res)
        setUserData(res.data);
      })
      .then(() => {
        commentData.forEach((comment) => {
          axios
            .get(`http://localhost:8000/petstagram/comments/${comment}`)
            .then((res) => {
              console.log(res.data);
              setComments([...comments, res.data]);
            });
        });
      });
  };

  useEffect(() => {
    getUser();
    setLikes(post.likes)
  }, []);

  const likeFunction = (e) => {
    console.log("Liking post")
    e.preventDefault();
    axios.put(`http://localhost:8000/petstagram/posts/like/${post._id}/${post.user}`,
    {likes: post.likes + 1})
    .then((res) => {
     console.log(res)
     setLikes(res.data.likes)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    const commentNames = comments.forEach((comment) => {
      console.log(comment.user);
      axios
        .get(`http://localhost:8000/petstagram/users/${comment.user}`)
        .then((res) => {
          console.log(res.data);
          setCommentUsers([...commentUsers, res.data]);
        });
    });
  }, [comments]);

  const renderComments = comments.map((comment) => {
    return comment.comment;
  });

  const renderCommentUsers = commentUsers.map((user) => {
    return user.name;
  });

  // const commentNames = comments.forEach((comment) => {
  //   console.log(comment.user);
  //   axios
  //     .get(`http://localhost:8000/petstagram/users/${comment.user}`)
  //     .then((res) => {
  //       console.log(res);
  //       setCommentUsers([...commentUsers, res.data]);
  //     });
  // });

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
              <IoIosHeartEmpty onClick={likeFunction} className='likeHeart' size={40} />
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
          <strong>Likes</strong> : {likes}
          <br />
          <p className='caption'>
            <strong>Caption</strong> : {post.description}
          </p>
        </div>
        <div>
          <p className='commentSection'>
            {renderCommentUsers}:{renderComments}
          </p>
        </div>
        <br />
        <Comment />
      </div>
    </div>
  );
};

export default Post;
