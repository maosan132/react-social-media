import React from 'react';

const Header = ({user, setUser}) => {
  return (
    <header>
      <h1>React User</h1>
      <p>Welcome, {user}!</p>
      <button onClick={() => setUser('')}>Log out</button>
    </header>
  );
}

export default Header;