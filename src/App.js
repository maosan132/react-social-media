import React from 'react';
import Login from './components/login';
import Header from './components/Header';

// APP HERE

const App = () => {
  const [user, setUser] = React.useState('dddd');

  if (!user) {
    return <Login setUser={setUser}/>;
  }

  return (
    <>
      <Header user={user} setUser={setUser}/>
    </>
  );
}

export default App;