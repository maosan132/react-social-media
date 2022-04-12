import React, { useEffect } from 'react';
import Login from './components/login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

// APP HERE

const App = () => {
  const [user, setUser] = React.useState('');
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    document.title = user ? `Welcome, ${user}!` : 'React User';
  }, [user]);

  const handleAddPost = newPost => {
    setPosts([newPost, ...posts])
  };

  if (!user) {
    return <Login setUser={setUser}/>;
  }

  return (
    <>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} handleAddPost={handleAddPost}/>
      {posts.length > 0 && <PostList posts={posts}/>}
    </>
  );
}

export default App;