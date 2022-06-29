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
        console.log(res.data);
        setUserData(res.data);
      });
  };

  
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
  
  const dislikeFunction = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/petstagram/posts/like/${post._id}/${post.user}`,
    {likes: post.likes})
    .then((res) => {
      console.log(res)
      setLikes(res.data.likes)
    })
    .catch(err => console.log(err))
  }
  
  
  useEffect(() => {
    const commentNames = comments.forEach((comment) => {
      console.log(comment.user);
      const getComments = () => {
        let oldArray = [];
        const commentURLs = post.comments.map((comment) => {
          return axios.get(`http://localhost:8000/petstagram/comments/${comment}`);
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
  //     useEffect(() => {
  //   getUser();
  //   setLikes(post.likes)
  //   getComments()
  // }, []);
      const deleteComment = (id) => {
        axios.delete(`http://localhost:8000/petstagram/comments/${post._id}/${id}`);
      };
      
      const deletePost = () => {
        axios.delete(
          `http://localhost:8000/petstagram/posts/${post._id}/${userData._id}`
          );
        };
        
        // useEffect(() => {
          //   getUser();
          //   getComments();
          // }, []);
          
          // useEffect(() => {
            //   comments.forEach((comment) => {
              //     axios
              //       .get(`http://localhost:8000/petstagram/users/${comment.user}`)
              //       .then((res) => {
                //         setCommentUsers([...commentUsers, res.data]);
                //       });
                //   });
                // }, [comments]);
                
                const renderComments = comments.map((comment) => {
                  return (
                    <div className='commentSection'>
        {comment.comment}
        <button onClick={() => deleteComment(comment._id)} id={comment._id}>
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
        <button onClick={() => deletePost()}>Delete</button>
        <img className='postImage' src={post.picture} alt='#' />
        <div className='postIcon'>
          <p className='likeButton' onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <IoIosHeart onClick={dislikeFunction} className='likeHeart' size={40} />
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
        <div>{renderComments}</div>
        <br />
        <Comment post={post} userData={userData} />
      </div>
    </div>
  );
});
})
}
export default Post;
