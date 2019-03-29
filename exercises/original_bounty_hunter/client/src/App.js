import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor (){
    super()
    this.state = {
      bountyDatabase: [],
      firstName: '',
      lastName: '',
      living: '',
      bountyAmount: '',
      type: '',
    }
  }

componentDidMount(){
  axios.get('/bounties/').then(res => {
    // console.log(res.data)
    this.setState({
       bountyDatabase: res.data
    })
  })
}



handleChange = event => {
  this.setState({ 
      [event.target.name]: event.target.value,
  }) 
}

handleSubmit = () => {
  const newBounty = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    living: this.state.living,
    bountyAmount: this.state.bountyAmount,
    type: this.state.type,
  }
  
  axios.post('/bounties/', newBounty).then(res => {
    this.setState({
       bountyDatabase: res.data
    })
  })
}

// this.setState(prevState => {
//   data: [...prevState, newObj]
// })

  render() {
    return (
      <div>
        <h3>Add a new bounty:</h3>
        
          <form onSubmit={this.handleSubmit}>
            First Name: <input type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handleChange}></input>
            Last Name: <input type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange}></input>
            Is Alive?: <input type='checkbox' name='living' value={this.state.living} onChange={this.handleChange}></input>
            Bounty Amount: <input type='number' name='bountyAmount' placeholder='Bounty' value={this.state.bountyAmount} onChange={this.handleChange}></input>
            Type: <input type='text' name='type' placeholder='Jedi or Sith' value={this.state.type} onChange={this.handleChange}></input>
            <button>Add New Bounty</button>
          </form>
        
        { this.state.bountyDatabase.map(c => 
          <div>
            <h2>Name:  {c.firstName} {c.lastName} </h2>
            <h3>Is Alive: {c.living} </h3>
            <h3>Bounty: ${c.bountyAmount} </h3>
            <h3>Type: {c.type} </h3>
          </div>)
          }

      </div>
    );
  }
}

export default App;
