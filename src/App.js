import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Char from './components/char/char.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Becoming a hero</h1>
        </header>
        <Char />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
