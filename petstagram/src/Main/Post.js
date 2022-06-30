import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { BsBookmark, BsFillBookmarkCheckFill } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import './post.css';
import Comment from './Comment';
import axios from 'axios';

const Post = ({ post, data, setData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [userData, setUserData] = useState({});
  const [comments, setComments] = useState([]);
  const [commentUsers, setCommentUsers] = useState([]);
  const [likes, setLikes] = useState(0);
  console.log(post);

  const getUser = () => {
    axios
      .get(
        `https://petstagram-backend.herokuapp.com/petstagram/users/${post.user}`
      )
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      });
  };

  const getComments = () => {
    let oldArray = [];
    const commentURLs = post.comments.map((comment) => {
      return axios.get(
        `https://petstagram-backend.herokuapp.com/petstagram/comments/${comment}`
      );
    });
    console.log(commentURLs);

    if (comments !== []) {
      axios
        .all(commentURLs)
        .then((res) => {
          console.log(res);
          res.forEach((response) => {
            console.log(response.data);
            oldArray.push(response.data);
          });
          console.log(oldArray);
          setTimeout(() => {
            setComments(oldArray);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteComment = (id) => {
    axios
      .delete(
        `https://petstagram-backend.herokuapp.com/petstagram/comments/${post._id}/${id}`
      )
      .then(() => {
        let ids = comments.map((comment) => {
          return comment._id;
        });
        let index = ids.indexOf(id);
        let temp = [...comments];
        temp.splice(index, 1);
        setComments(temp);
      });
  };

  const deletePost = (id) => {
    axios
      .delete(
        `https://petstagram-backend.herokuapp.com/petstagram/posts/${post._id}/${userData._id}`
      )
      .then(() => {
        let ids = data.map((post) => {
          return post._id;
        });
        let index = ids.indexOf(id);
        let temp = [...data];
        temp.splice(index, 1);
        setData(temp);
      });
  };

  useEffect(() => {
    getUser();
    setLikes(post.likes);
  }, []);

  const likeFunction = (e) => {
    console.log('Liking post');
    e.preventDefault();
    axios
      .put(
        `https://petstagram-backend.herokuapp.com/petstagram/posts/like/${post._id}/${post.user}`,
        { likes: post.likes + 1 }
      )
      .then((res) => {
        console.log(res);
        setLikes(res.data.likes);
      })
      .catch((err) => console.log(err));
  };

  const dislikeFunction = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://petstagram-backend.herokuapp.com/petstagram/posts/like/${post._id}/${post.user}`,
        { likes: post.likes }
      )
      .then((res) => {
        console.log(res);
        setLikes(res.data.likes);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getComments();
  }, []);

  const renderComments = comments.map((comment) => {
    return (
      <div className='commentSection'>
        {comment.comment}
        <button
          className='deleteBtn'
          onClick={() => deleteComment(comment._id)}
          id={comment._id}
        >
          Delete
        </button>
      </div>
    );
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
        <button
          className='deleteBtn deletePost'
          onClick={() => deletePost(post._id)}
          id={post._id}
        >
          Delete
        </button>
        <img className='postImage' src={post.picture} alt='#' />
        <div className='postIcon'>
          <p className='likeButton' onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <IoIosHeart
                onClick={dislikeFunction}
                className='likeHeart'
                size={40}
              />
            ) : (
              <IoIosHeartEmpty
                onClick={likeFunction}
                className='likeHeart'
                size={40}
              />
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
          <div>{renderComments}</div>
        </div>
        <br />
        <Comment
          post={post}
          userData={userData}
          comments={comments}
          setComments={setComments}
          getComments={getComments}
        />
      </div>
    </div>
  );
};

export default Post;
