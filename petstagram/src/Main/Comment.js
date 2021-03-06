import axios from 'axios';
import React, { useState } from 'react';

const Comment = ({ post, userData, comments, setComments, getComments }) => {
  const [newComment, setNewComment] = useState('');

  const handleComment = (e) => {
    setNewComment(e.target.value);
  };

  const submitComment = () => {
    axios
      .post(
        `https://petstagram-backend.herokuapp.com/petstagram/comments/${post._id}/${userData._id}`,
        {
          comment: newComment,
        }
      )
      .then((res) => {
        let oldArray = [...comments];
        oldArray.push(res.data);
        setComments(oldArray);
      });
  };

  return (
    <div>
      <form>
        <div class='input-group mb-3'>
          <input
            onChange={handleComment}
            type='text'
            class='form-control'
            placeholder='Comment...'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
            maxlength='60'
          />
          <div class='input-group-append'>
            <button
              onClick={submitComment}
              class='btn btn-outline-secondary'
              type='button'
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
