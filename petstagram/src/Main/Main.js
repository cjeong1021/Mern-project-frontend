import React from 'react'
import Post from './Post'
import Navigation from '../navigation/Navigation';
import { Route, Routes, useLocation} from 'react-router-dom'

const Main = ({data}) => {
  const location = useLocation()
  const postData = data.map( post => {
    return (
      
      <Post post={post} />
    )
  })
  return (
    <div className='main'>
      <nav className='fullNav'>
      {location.pathname === '/' ? null : <Navigation /> && location.pathname === '/sign-up' ? null : <Navigation />}

      </nav>
      {postData}
    </div>
  )
}

export default Main