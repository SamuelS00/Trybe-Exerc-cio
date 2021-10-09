import React from 'react';
import './App.css';

const Task = (value) => {
  return <li key={value}>{value}</li>;
};

const tarefas = [
  'tarefa 1',
  'tarefa 2',
  'tarefa 3',
  'tarefa 4',
];

class App extends React.Component {
  render() {
    return <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>;
  }
}

export default App;