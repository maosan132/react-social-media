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

// APP HERE

const App = () => {
  const [developerInfo, setDeveloperInfo] = React.useState({
    inputValue: '',
    language: 'Python',
    experience: 0
  });
  const people = ['John', 'Jane', 'Mary'];

  function handleInputChange(event) {
    setDeveloperInfo({...developerInfo, inputValue: event.target.value});
  }

  return (<Layout >

    {isAuthenticated ? (
      <>
        <Header username="React" lastName="User" />
        <ul>
          {people.map((person, i) => <Person key={i} person={person} i={i}/>)}
        </ul>
        <input onChange={handleInputChange} />
        <p>{developerInfo.inputValue}</p>
        <div>
          <button onClick={() => setDeveloperInfo({...developerInfo, language: 'Javascript'})}>Change Language to Javascript</button>    <br />
          <input
            type='number'
            onChange={(event) => setDeveloperInfo({...developerInfo, experience: event.target.value})}
          />
          <p>I am learning {developerInfo.language}</p>
          <span>Experience: </span>
          <p>Years of experience: {developerInfo.experience}</p>
        </div>
        <br /><br />
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