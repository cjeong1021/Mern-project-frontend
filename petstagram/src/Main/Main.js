import React from 'react'
import Post from './Post'

const Main = ({data}) => {
  const postData = data.map( post => {
    return (
      <Post post={post} />
    )
  })
  return (
    <div className='main'>
      {postData}
    </div>
  )
}

export default Main