import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello old World</h1>
      </div>
    );
  }
}

// function Header() {
//   return <h1>Hello everybody!</h1>
// }

// const Header = () => <h1>Hello all!</h1>

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

// if (isReactUser) {
//     ReactDOM.render(greeting, rootNode);
// } else {
//     ReactDOM.render(anotherGreeting, rootNode);
// }

function greet() {
  if (isReactUser) {
    return greeting;
  } else {
    return anotherGreeting;
  }
}

// ReactDOM.render(greet(), rootNode);
ReactDOM.render(<Header />, rootNode);