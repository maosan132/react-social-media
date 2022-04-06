import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <h1>Hello {props.username} {props.lastName} at {year}</h1>

const Layout = (props) => <div style={{backgroundColor: 'aquamarine'}}>{props.children}</div>

const Login = () => <div><p>Please Login first</p><button>Login</button></div>

const SignOut = () => <button>Exit</button>

const Person = (props) => {
  function handlePersonClick(event) {
    console.log('Person clicked', props.person, event);
  }
  return <li style={{cursor: 'pointer'}} onClick={handlePersonClick}>{props.person} {props.i}</li>
}

const year = new Date().getFullYear();
const rootNode = document.getElementById('root');

const isAuthenticated = true;

const App = () => {
  const people = ['John', 'Jane', 'Mary'];

  function handleInputChange(event) {
    const inputValue = event.target.value;
    console.log(inputValue);
  }
  return (<Layout >
    {/* {isAuthenticated ? <Header username="React" lastName="User" /> : <Login />}
    {isAuthenticated && <SignOUt />} short circuiting operation */}
    {isAuthenticated ? (
      <>
        <Header username="React" lastName="User" />
        {/* <ul>
          {people.map(person => <li>{person}</li>)}
        </ul> */}
        <ul>
          {people.map((person, i) => <Person key={i} person={person} i={i}/>)}
        </ul>
        <input onChange={handleInputChange} />
        <SignOut />
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