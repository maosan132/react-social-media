import React from 'react';

const PostList = ({posts}) => {
  return (
    <div>
      <h2>Post List</h2>
      {
        posts.map((post, i) => (
          <div key={i} style={{border: 'solid 1px black', padding: 10, marginTop: 10}}>
            {post.image && <img
              src={URL.createObjectURL(post.image)}
              alt='post cover'
              style={{height: 200, width: '100%', objectFit: 'cover' }}
            />}
            <p>{post.content.title}</p>
            <p>{post.content.body}</p>
          </div>
        ))
      }
    </div>
  );
}

export default PostList;

