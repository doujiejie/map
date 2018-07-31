import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import list from './list.js';
import map from './map.js';

class App extends Component {

    state = {
      data :{
        "tokyo":{
          "title": "東京駅",
          "map": "map",
          "positon": {
            "lat": 35.681167,
            "lng": 139.7670516
          }
        },
        "sinjyuku":{
          "title": "新宿駅", 
          "map": "map",
          "positon": {
            "lat" : 35.6895924,
            "lng" : 139.7004131
          }
        },
        "ikebukuro":{
          "title": "池袋駅",
          "map": "map",
          "positon": {
            "lat" : 35.7295028,
            "lng" : 139.7109001
          }
        },
        "shibuya":{
          "title": "渋谷駅",
          "map": "map",
          "positon": {
            "lat" : 35.6580339,
            "lng" : 139.7016358
          }
        },
        "harajyuku":{
          "title": "原宿駅",
          "map": "map",
          "positon": {
            "lat" : 35.6702285,
            "lng" : 139.7026976
          }
        },
        "ginza":{
          "title": "銀座駅",
          "map": "map",
          "positon": {
            "lat" : 35.6717519,
            "lng" : 139.7643082
          }
        },
      }
  }

  render() {
      console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Street Map</h1>
        </header>
        <div className="container">
          <div className="inner">
            <list data={this.state.data}/>
            <map  data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
