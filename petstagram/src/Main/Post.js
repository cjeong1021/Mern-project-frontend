import React, {useState} from 'react'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { BsBookmark } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import './post.css'

const Post = ({post}) => {
  const [isLiked, setIsLiked] = useState(false);


  return (
    <div className=''>
    <div className='postBox'>
          <div className='postTop'>
            <BiUserCircle className='userName' size={80}/>
            <p className='userName'>Sonam</p>
          </div>
        <img className='postImage' src='https://www.thesprucepets.com/thmb/jschPYYgX2Z2R04YkFt_HBIblJw=/1566x1044/filters:fill(auto,1)/GettyImages-1214648223-a185de9c88984ca69f1ac720bdea6efe.jpg' alt='#' />
        <div className='postIcon'>
          <p className='likeButton' onClick={() => setIsLiked(!isLiked)}>
           {isLiked
              ? <IoIosHeart size={40} />
              : <IoIosHeartEmpty size={40} />
            }
          </p>
          
          <BsBookmark size={35} />
        </div>
    </div>
    </div>

  )
}

export default Post