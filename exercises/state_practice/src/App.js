import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }

  addOne = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter +1
      }
    })
  }
  subtractOne = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter -1
      }
    })
  }
  multiplyBy2 = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter *2
      }
    })
  }
  divideBy2 = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter /2
      }
    })
  }

  changeNum = () => {
    this.setState({
      counter: 10
    })
  }

  render() {
    return (
      <div>
        <h1> {this.state.counter} </h1>
        <button onClick={this.addOne}> + </button>
        <button onClick={this.subtractOne}> - </button>
        <button onClick={this.multiplyBy2}> * 2 </button>
        <button onClick={this.divideBy2}> / 2 </button>
      </div>
    );
  }
}

export default App;
