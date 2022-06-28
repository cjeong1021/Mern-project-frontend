import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { BsBookmark, BsFillBookmarkCheckFill } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import './post.css'
import Comment from './Comment'
import axios from 'axios'

const Post = ({post}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false)
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
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className='mainPost'>
    <div className='postBox'>
          <div className='postTop'>
            <Link style={{color:'inherit'}} to="/user/:id">
            <BiUserCircle className='userName' size={80}/>
            <p style={{marginTop:"1.2rem"}} className='userName'>{userData.name}</p>
            </Link>
          </div>
        <img className='postImage' src={post.picture} alt='#' />
        <div className='postIcon'>
          <p className='likeButton' onClick={() => setIsLiked(!isLiked)}>
           {isLiked
              ? <IoIosHeart className='likeHeart' size={40} />
              : <IoIosHeartEmpty className='likeHeart' size={40} />
            }
          </p>
          <p className='likeButton' onClick={() => setIsSaved(!isSaved)}>
          {isSaved
            ? <BsFillBookmarkCheckFill className='saveButton' size={35} />
            : <BsBookmark className='saveButton' size={35} /> 
          }
          </p>
        </div>
        <div className='captionSection'> 
            <strong>Likes</strong> : ###
            <br />
            <p className='caption'>
            <strong>Caption</strong> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor nobis laborum quod ut at odio assumenda autem illum quo, exercitationem facilis ad blanditiis, illo earum repellat fugit dignissimos harum perspiciatis iste minus nisi voluptatum quidem cupiditate. Harum, eveniet rem!
            </p>
        </div>
        <div >
          <p className='commentSection'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto non hic accusamus temporibus quia vel, tempore rem. Quas beatae, vitae distinctio enim ullam eaque! Autem alias cupiditate reiciendis dolor!</p>
          </div>
          <br />
          <Comment />
    </div>
    </div>

  )
}

export default Post