import React, { Component } from 'react';
import Die from './Die'

class DiceBox extends Component {

    constructor(){
        super()
        this.state = {
            die1: 0,
            die2: 0,
            die3: 0,
            die4: 0,
            die5: 0,
            die1Selected: false,
            die2Selected: false,
            die3Selected: false,
            die4Selected: false,
            die5Selected: false,
        }
    }

    numberGen = () =>{
        const num1 = Math.ceil(Math.random() * 6);
        const num2 = Math.ceil(Math.random() * 6);
        const num3 = Math.ceil(Math.random() * 6);
        const num4 = Math.ceil(Math.random() * 6);
        const num5 = Math.ceil(Math.random() * 6);

        this.setState(prevState => {
            return {
            //number: Math.ceil(Math.random() * 6),
            die1: this.state.die1Selected ? prevState.die1 : num1,
            die2: this.state.die1Selected ? prevState.die2 : num2,
            die3: this.state.die1Selected ? prevState.die3 : num3,
            die4: this.state.die1Selected ? prevState.die4 : num4,
            die5: this.state.die1Selected ? prevState.die5 : num5,
        }
        })
        
    }

    selectDie = (selectedDie) => {
        console.log(selectedDie)
        if(selectedDie === 'die1'){
            this.setState({die1Selected: true})
        } else if(selectedDie === 'die2'){
            this.setState({die2Selected: true})
        } else if(selectedDie === 'die3'){
            this.setState({die3Selected: true})
        } else if(selectedDie === 'die4'){
            this.setState({die4Selected: true})
        } else if(selectedDie === 'die5'){
            this.setState({die5Selected: true})
        }
    }

  render() {
      
    return (
      <div>
          <Die dice={this.state.die1} selectDie={this.selectedDie} name='die1'/>
          <Die dice={this.state.die2} selectDie={this.selectedDie} name='die2'/>
          <Die dice={this.state.die3} selectDie={this.selectedDie} name='die3'/>
          <Die dice={this.state.die4} selectDie={this.selectedDie} name='die4'/>
          <Die dice={this.state.die5} selectDie={this.selectedDie} name='die5'/>
    
        <button onClick={this.numberGen}>Roll All Dice</button>
      </div>
    );
  }
}

export default DiceBox;


