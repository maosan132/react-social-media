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
    name: 'Maurice',
    inputValue: '',
    language: 'Python',
    experience: 0,
    isEmployed: false,
  });
  const people = ['John', 'Jane', 'Mary'];

  React.useEffect(() => {
    document.title = developerInfo.name
  });

  function handleInputChange(event) {
    setDeveloperInfo({...developerInfo, inputValue: event.target.value});
  }

  function handleLanguageChange() {
    setDeveloperInfo({experience: 0, language: 'Javascript'});
  }

  function handleExperienceChange(event) {
    setDeveloperInfo({...developerInfo, experience: event.target.value});
  }

  const handleToggleEmployment = () => {
    setDeveloperInfo(prevState => ({...prevState, isEmployed: !prevState.isEmployed}));
  }

  const handleChangeName = () => {
    setDeveloperInfo(prevState => ({...prevState, name: 'Maurice'}));
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
          <button onClick={handleLanguageChange}>Change Language to Javascript</button>    <br />
          <input
            type='number'
            onChange={handleExperienceChange}
          />
          <input
            type='text'
            onChange={handleChangeName}
          />
          <br />
          <button onClick={handleToggleEmployment}>
          Toggle employment status
          </button>
          <p>I am learning {developerInfo.language}</p>
          <span>Experience: </span>
          <p>Years of experience: {developerInfo.experience}</p>
          <p>Employment status: {developerInfo.isEmployed ? 'Employed' : 'Unemployed' } </p>
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