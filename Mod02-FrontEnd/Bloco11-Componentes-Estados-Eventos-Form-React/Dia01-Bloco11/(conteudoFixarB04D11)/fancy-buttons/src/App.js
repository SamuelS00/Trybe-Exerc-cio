import React from 'react';
import './App.css';


function handleClick() {
  console.log('Clicou no botão 1');
}

function handleClick2() {
  console.log('Clicou no botão! 2');
}

function handleClick3() {
  console.log('Clicou no botão! 3');
}
class App extends React.Component {
  
  render() {
    return (
      <div className="App">
         <button onClick={handleClick}>Meu botão</button>
         <button onClick={handleClick2}>Meu botão 2</button>
         <button onClick={handleClick3}>Meu botão 3</button>
      </div>
    );
  }
}

export default App;
