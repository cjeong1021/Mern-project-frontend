import React from 'react';
import Post from './Post';

const Main = ({ data, setData }) => {
  const postData = data.map((post) => {
    return <Post post={post} data={data} setData={setData} />;
  });
  return <div className='main'>{postData}</div>;
};

export default Main;
