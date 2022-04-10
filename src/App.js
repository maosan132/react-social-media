import React from 'react';
import Login from './components/login';

// APP HERE

const App = () => {
  const [user, setUser] = React.useState(null);

  if (!user) {
    return <Login setUser={setUser}/>;
  }

  return <div>App</div>
}

export default App;