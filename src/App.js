import React, { useEffect } from 'react';
import Login from './components/login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

// APP HERE

const App = () => {
  const [user, setUser] = React.useState('');
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    document.title = user ? `Welcome, ${user}!` : 'React User';
  }, [user]);

  if (!user) {
    return <Login setUser={setUser}/>;
  }

  return (
    <>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} setPosts={setPosts} posts={posts}/>
      {posts.map((post, i) => (
        <div style={{border: 'solid 1px black', padding: 10, marginTop: 10}}>
        {post.image && <img
          src={URL.createObjectURL(post.image)}
          alt={`Post ${i}`}
          style={{height: 200, width: '100%', objectFit: 'cover' }}
        />}
          <p>{post.content.title}</p>
          <p>{post.content.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;