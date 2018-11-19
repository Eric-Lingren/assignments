import React, { Component } from 'react';


class DiceBox extends Component {

    constructor(){
        super()
        this.state = {
            //number: 0,
            die1: 0,
            die2: 0,
            die3: 0,
            die4: 0,
            die5: 0
        }
    }

    numberGen = () =>{
        this.setState({
            //number: Math.ceil(Math.random() * 6),
            die1: Math.ceil(Math.random() * 6),
            die2: Math.ceil(Math.random() * 6),
            die3: Math.ceil(Math.random() * 6),
            die4: Math.ceil(Math.random() * 6),
            die5: Math.ceil(Math.random() * 6)
        })
        
    }

  render() {
      
    return (
      <div>
        <h2> {this.state.die1} </h2>
        <h2> {this.state.die2} </h2>
        <h2> {this.state.die3} </h2>
        <h2> {this.state.die4} </h2>
        <h2> {this.state.die5} </h2>
        <button onClick={this.numberGen}>Roll All Dice</button>
      </div>
    );
  }
}

export default DiceBox;
