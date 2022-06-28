import React from 'react'
import './navigation.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io'
import { FaPaw } from 'react-icons/fa'
import { Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='fullNav' style={{backgroundColor:"white",borderBottom:'.5px solid rgb(172, 172, 172)'
    }}>
    <div className='navBar'>
      <div className='logo'>
      <Link to="/main" style={{textDecoration:'none',color: 'inherit'}} >
        <h3><FaPaw size={25}/> Petstagram</h3>
      </Link>
      </div>
        <form>
          <IoIosSearch />
            <input type="search" className='searchBar' placeholder='Search'/>
        </form>
        <div >
          <Link to="/main" style={{color: 'inherit'}} >
          <AiOutlineHome size={28} className='icons' />
          </Link>
          <IoIosAddCircleOutline size={28} className='icons' />
          <AiOutlineUser size={28} className='icons' />
        </div>
    </div>
    </div>
  )
}

export default Navigation