import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { IoIosHeartEmpty } from 'react-icons/io'
import { BsBookmark } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

import './post.css'

const Post = ({post}) => {
    console.log(post)
  return (
    <div className=''>
    <div className='postBox'>
          <div className='postTop'>
            <BiUserCircle className='userName' size={80}/>
            <p className='userName'>Sonam</p>
          </div>
        <img className='postImage' src='https://www.thesprucepets.com/thmb/jschPYYgX2Z2R04YkFt_HBIblJw=/1566x1044/filters:fill(auto,1)/GettyImages-1214648223-a185de9c88984ca69f1ac720bdea6efe.jpg' alt='#' />
        <div className='postIcon'>
            <IoIosHeartEmpty size={40} />
            <BsBookmark size={35} />
        </div>
    </div>
    </div>

  )
}

export default Post