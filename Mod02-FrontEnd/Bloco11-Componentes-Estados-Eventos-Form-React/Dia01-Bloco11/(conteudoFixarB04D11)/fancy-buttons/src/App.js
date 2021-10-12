import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      clicks: 0,
      clicks2: 0,
      clicks3: 0,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.handleClear= this.handleClear.bind(this)
    this.handleAll= this.handleAll.bind(this)
  }
 
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      clicks: estadoAnterior.clicks + 1
    }))
  }

  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      clicks2: estadoAnterior.clicks2 + 1
    }))
  }

  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      clicks3: estadoAnterior.clicks3 + 1
    }))
  }

  handleClear() {
    this.setState((estadoAnterior,_props) => ({
      clicks: estadoAnterior.clicks - estadoAnterior.clicks,
      clicks2: estadoAnterior.clicks2 - estadoAnterior.clicks2,
      clicks3: estadoAnterior.clicks3 - estadoAnterior.clicks3,
    }))
  }

  handleAll () {
    this.setState((estadoAnterior,_props) => ({
      clicks: estadoAnterior.clicks + 1,
      clicks2: estadoAnterior.clicks2 + 1,
      clicks3: estadoAnterior.clicks3 + 1,
    }))
  }

  render() {
    return (
      <div className="App">
         <button onClick={this.handleClick}>{this.state.clicks}</button>
         <button onClick={this.handleClick2}>{this.state.clicks2}</button>
         <button onClick={this.handleClick3}>{this.state.clicks3}</button>
         <button onClick={this.handleAll}>{`Adiciona ${1} em todos`}</button>
         <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default App;
