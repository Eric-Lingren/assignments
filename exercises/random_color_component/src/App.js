import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      color: ''
    }
  }


componentDidMount(){
  axios.get('http://www.colr.org/json/color/random').then(response => {
    this.setState({
      color: `#${response.data.colors[0].hex}`
    })
  })
}

onChange(){
  window.location.reload()
}

  render() {
    return (
      <div className='pageDiv' style={{backgroundColor: this.state.color}}>
       <button onClick={this.onChange}>Click for a random color!</button>
      </div>
    );
  }
}

export default App;
