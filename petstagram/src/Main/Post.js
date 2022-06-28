import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { BsBookmark } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import './post.css'
import Comment from './Comment'
import axios from 'axios'

const Post = ({post}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [userData, setUserData] = useState({});
  const [comments, setComments] = useState([]);

  const getUser = () => {
    axios
      .get(`http://localhost:8000/petstagram/users/${post.user}`)
      .then((res) => {
        setUserData(res.data);
      });
  };

    const commentData = post.comments.map((comment) => {
      return comment
    })

    const getComments = () => {
      commentData.forEach((comment) => {
        axios.get(`http://localhost:8000/petstagram/comments/${comment}`).then((res) => {
          setComments([...comments, res.data.comment])
        }
        )
      })
    }

  useEffect(() => {
    getUser();
    getComments();
  }, []);
<<<<<<< HEAD

  const renderComments = comments.map((comment) => {
    return (
      <p className='commentSection'>{comment}</p>
    )
  })
=======
>>>>>>> parent of 0782a0e (Merge branch 'main' of github.com:cjeong1021/Mern-project-frontend)

  return (
    <div className=''>
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
          
          <BsBookmark className='saveButton' size={35} />
        </div>
        <div className='captionSection'> 
            <strong>Likes</strong> : {post.likes}
            <br />
            <p className='caption'>
            <strong>Caption</strong> : {post.description}
            </p>
        </div>
        <div >
<<<<<<< HEAD
          {renderComments}
=======
          <p className='commentSection'> <strong>*User*</strong> :Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto non hic accusamus temporibus quia vel, tempore rem. Quas beatae, vitae distinctio enim ullam eaque! Autem alias cupiditate reiciendis dolor!</p>
>>>>>>> parent of 0782a0e (Merge branch 'main' of github.com:cjeong1021/Mern-project-frontend)
          </div>
          <br />
          <Comment />
    </div>
    </div>

  )
}

export default Post