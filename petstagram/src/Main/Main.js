import React from 'react'
import Post from '../Post/Post'

const Main = ({data}) => {
  console.log(data);
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