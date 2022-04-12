import React, { useEffect } from 'react';
import Login from './components/login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

// APP HERE

const fxCount = new Set();

const App = () => {
  const [user, setUser] = React.useState('xxx');
  const [posts, setPosts] = React.useState([]);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    document.title = user ? `Welcome, ${user}!` : 'React User';
  }, [user]);

  // const handleAddPost = newPost => {
  //   setPosts([newPost, ...posts])
  // };

  const handleAddPost = React.useCallback(
    newPost => {
      setPosts([newPost, ...posts]);
    }, [posts]
  );

  fxCount.add(handleAddPost);
  console.log(fxCount);

  if (!user) {
    return <Login setUser={setUser}/>;
  }

  return (
    <>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} handleAddPost={handleAddPost}/>
      {posts.length > 0 && <PostList posts={posts}/>}
      <button onClick={() => setCount(prev => prev + 1)}>{count} +</button>
    </>
  );
}

export default App;