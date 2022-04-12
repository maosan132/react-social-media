import React from 'react';
import Post from './Post';

const PostList = ({posts}) => {
  return (
    <div>
      <h2>Post List</h2>
      {
        posts.map((post, i) => (
          <Post key={i} {...post}/>
        ))
      }
    </div>
  );
}

export default PostList;