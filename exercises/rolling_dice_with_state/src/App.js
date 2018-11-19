import React, { Component } from 'react';
import DiceBox from './DiceBox'

class App extends Component {

  render() {
    return (
      <div>
        <h2>Lets Play Dice!</h2>
        <DiceBox />
      </div>
    );
  }
}

export default App;
