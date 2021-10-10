// App.js
import React from 'react';

import Header from './componets/Header';
import Content from './componets/Content';
import Footer from './componets/Footer';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;