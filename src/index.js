import React from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'https://api.github.com/users/'

const year = new Date().getFullYear();
const rootNode = document.getElementById('root');

// APP HERE

const App = () => {

  return <div></div>
}

ReactDOM.render(
  < App />, rootNode
);

// const NewPage = () => {
//   return <Layout>
//     <Header username="New" lastName="Page" />
//    <div>  New page here </div>
//    <br />
//   </Layout>
// };

// setTimeout(() => ReactDOM.render(<NewPage/>, rootNode), 2000);