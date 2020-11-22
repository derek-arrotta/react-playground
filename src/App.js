import React, { Component } from 'react';
import './App.css';
//import Messages from './Messages';
//import TheDate from './state/TheDate';
//import Counter from './state/Counter'
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld friend={'friend!'} react={'React!'} world={'world!'} />
        <Bomb />
        <RouletteGun bulletInChamber={8} />
      </div>
    );
  }
}
//<TheDate />
//<Counter count={123} step={2}/>

export default App;