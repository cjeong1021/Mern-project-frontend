import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { BsBookmark } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import './post.css'
import EllipsisText from "react-ellipsis-text"

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className=''>
    <div className='postBox'>
          <div className='postTop'>
            <Link style={{color:'inherit'}} to="/user/:id">
            <BiUserCircle className='userName' size={80}/>
            <p style={{marginTop:"1.2rem"}} className='userName'>Sonam</p>
            </Link>
          </div>
        <img className='postImage' src='https://www.thesprucepets.com/thmb/jschPYYgX2Z2R04YkFt_HBIblJw=/1566x1044/filters:fill(auto,1)/GettyImages-1214648223-a185de9c88984ca69f1ac720bdea6efe.jpg' alt='#' />
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
            <strong>Likes</strong> : ###
            <br />
            <p className='caption'>
            <strong>Caption</strong> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor nobis laborum quod ut at odio assumenda autem illum quo, exercitationem facilis ad blanditiis, illo earum repellat fugit dignissimos harum perspiciatis iste minus nisi voluptatum quidem cupiditate. Harum, eveniet rem!
            </p>
        </div>
        <div >
          <input className='comment' type="text" placeholder='comment...' />
          <br />
          <p className='commentSection'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto non hic accusamus temporibus quia vel, tempore rem. Quas beatae, vitae distinctio enim ullam eaque! Autem alias cupiditate reiciendis dolor!</p>
        </div>
    </div>
    </div>

  )
}

export default Post