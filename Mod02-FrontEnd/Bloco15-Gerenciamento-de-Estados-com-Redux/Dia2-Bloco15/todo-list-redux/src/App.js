import React from "react";
import InputTask from "./components/InputTask";
import ListTask from "./components/ListTask";

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <h1> Task List </h1>
         <InputTask />
         <ListTask />
      </div>
    );
  }
}

export default App;
