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
  const people = ['John', 'Jane', 'Mary'];
  const [developerInfo, setDeveloperInfo] = React.useState({
    tabName: 'Maurice',
    inputValue: 'Comments here',
    language: 'Python',
    experience: 0,
    isEmployed: false,
  });
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0
  });

  React.useEffect(() => {
    document.title = developerInfo.tabName
  }, [developerInfo.tabName]);

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function handleMouseMove(event) {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

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

  const handleChangeTabName = (event) => {
    setDeveloperInfo(prevState => ({...prevState, tabName: event.target.value}));
  }

  // const Coordinates

  return (<Layout >

    {isAuthenticated ? (
      <>
        <Header username="React" lastName="User" />
        <ul>
          {people.map((person, i) => <Person key={i} person={person} i={i}/>)}
        </ul>
        <span>Add a comment: </span><input onChange={handleInputChange} />
        <p>{developerInfo.inputValue}</p>
        <div>
          <span>Change Language to Javascript: </span><button onClick={handleLanguageChange}>GO</button>    <br />
          <span>Experience years: </span><input
            type='number'
            onChange={handleExperienceChange}
          /><br />
          <span>Browser tab name: </span>
          <input
            type='text'
            onChange={handleChangeTabName}
          />
          <br />
          <span>Toggle employment status: </span><button onClick={handleToggleEmployment}>
          Go
          </button>
          <p>I am learning {developerInfo.language}</p>
          <p>Years of experience: {developerInfo.experience}</p>
          <p>Employment status: {developerInfo.isEmployed ? 'Employed' : 'Unemployed' } </p>
        </div>
        <p>Mouse position: {mousePosition.x}, {mousePosition.y}</p>
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

const NewPage = () => {
  return <Layout>
    <Header username="New" lastName="Page" />
   <div>  New page here </div>
   <br />
  </Layout>
};

setTimeout(() => ReactDOM.render(<NewPage/>, rootNode), 2000);