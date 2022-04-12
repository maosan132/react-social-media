import React from 'react';

const Post = ({image, content, user}) => {
  return (
    <div style={{border: 'solid 1px black', padding: 10, marginTop: 10}}>
      {image && <img
        src={URL.createObjectURL(image)}
        alt='post cover'
        style={{height: 200, width: '100%', objectFit: 'cover' }}
      />}
      <p>{content.title}</p>
      <p>{content.body}</p>
    </div>
  );
}

export default Post;

