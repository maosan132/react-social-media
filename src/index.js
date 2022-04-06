import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <h1>Hello {props.username} {props.lastName} at {year}</h1>

const Layout = (props) => <div style={{backgroundColor: 'aquamarine'}}>{props.children}</div>

const Login = () => <div><p>Please Login first</p><button>Login</button></div>

const SignOUt = () => <button>Exit</button>

const greeting = (
  <div>
    <h1>Hello guys!</h1>
  <p>Welcome to React!</p>
  <button style={{backgroundColor: 'blue'}}>submit</button>
  </div>
  );
const year = new Date().getFullYear();
const rootNode = document.getElementById('root');

const isAuthenticated = false;

const App = () => {
  return (<Layout >
    {/* {isAuthenticated ? <Header username="React" lastName="User" /> : <Login />}
    {isAuthenticated && <SignOUt />} short circuiting operation */}
    {isAuthenticated ? (
      <>
        <Header username="React" lastName="User" />
        <SignOUt />
      </>
    ) :
    <Login />
    }
    <footer>Copyright 2022</footer>
  </Layout>)
}

ReactDOM.render(
  < App />, rootNode
);