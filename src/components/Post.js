import React from 'react';

const Post = ({post}) => {
  return (
    <div style={{border: 'solid 1px black', padding: 10, marginTop: 10}}>
      {post.image && <img
        src={URL.createObjectURL(post.image)}
        alt='post cover'
        style={{height: 200, width: '100%', objectFit: 'cover' }}
      />}
      <p>{post.content.title}</p>
      <p>{post.content.body}</p>
    </div>
  );
}

export default Post;

