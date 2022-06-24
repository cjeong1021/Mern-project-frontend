import React from 'react'
import './navigation.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io'

const Navigation = () => {
  return (
    <div className='navBar'>
        <h3>Logo</h3>
        <form>
          <IoIosSearch />
            <input type="search" className='searchBar' placeholder='Search'/>
        </form>
        <div >
          <AiOutlineHome size={35} className='icons' />
          <IoIosAddCircleOutline size={35} className='icons' />
          <AiOutlineUser size={35} className='icons' />
        </div>
    </div>
  )
}

export default Navigation