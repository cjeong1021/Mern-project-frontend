import React from 'react'
import './navigation.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io'
import { FaPaw } from 'react-icons/fa'
import { Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <Link to="/" style={{color: 'inherit', textDecoration:'none'}} >
        <h3><FaPaw size={25}/> Petstagram</h3>
        </Link>
      </div>
        <form>
          <IoIosSearch size={25}/>
            <input type="search" className='searchBar' placeholder='Search'/>
        </form>
        <div >
          <Link to="/" style={{color: 'inherit'}} >
          <AiOutlineHome size={29} className='icons' />
          </Link>
          <IoIosAddCircleOutline 
          size={29} className='icons'/>
          <AiOutlineUser size={30} className='icons' />
        </div>
    </div>
  )
}

export default Navigation