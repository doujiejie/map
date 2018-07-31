import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import list from './list.js';
import map from './map.js';

class App extends Component {

    state = {
      data :{

      }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Street Map</h1>
        </header>
        <list />
        <map />
      </div>
    );
  }
}

export default App;
