import React from 'react';
import ReactDOM from 'react-dom';

// class Header extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>Hello old World</h1>
//       </div>
//     );
//   }
// }

// function Header() {
//   return <h1>Hello everybody!</h1>
// }

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
const anotherGreeting = <div>  bye guys! {year}</div>;
const rootNode = document.getElementById('root');
const isReactUser = true;

const isAuthenticated = true;

// if (isReactUser) {
//     ReactDOM.render(greeting, rootNode);
// } else {
//     ReactDOM.render(anotherGreeting, rootNode);
// }

// function greet() {
//   if (isReactUser) {
//     return greeting;
//   } else {
//     return anotherGreeting;
//   }
// }

// ReactDOM.render(greet(), rootNode);

ReactDOM.render(
  <Layout >
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
  </Layout>,
  rootNode
);