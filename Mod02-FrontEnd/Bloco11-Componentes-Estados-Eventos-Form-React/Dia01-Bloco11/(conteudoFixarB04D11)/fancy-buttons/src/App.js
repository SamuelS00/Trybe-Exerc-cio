import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super() 

    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }
 
  handleClick() {
    console.log('Clicou no botão! 1');
  }

  handleClick2() {
    console.log('Clicou no botão! 2');
  }

  handleClick3() {
    console.log('Clicou no botão! 3');
  }

  render() {
    return (
      <div className="App">
         <button onClick={this.handleClick}>Meu botão</button>
         <button onClick={this.handleClick2}>Meu botão 2</button>
         <button onClick={this.handleClick3}>Meu botão 3</button>
      </div>
    );
  }
}

export default App;
