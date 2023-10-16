import React from 'react';
import ReactDOM from 'react-dom';

const App =() => {
     return <h1>Hello world !!!</h1>;
}



// function App() {
//      return React.createElement('h1')
// }  

ReactDOM.render(<App/>,document.querySelector('#root'));