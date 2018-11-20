import React, { Component } from 'react';
//import People from './People'

class App extends Component {
  constructor(){
    super()

    this.state = {
      fName: '',
      mName: '',
      lName: '',
      age: '',
      people: []
    }

  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const newPerson = {
              fName: this.state.fName,
              mName: this.state.mName,
              lName: this.state.lName,
              age: this.state.age,
              
  }

    this.setState(prevState => {
      return {
        people: [...prevState.people, newPerson],
        fName: '',
        mName: '',
        lName: '',
        age: '',
      }
    })
  }


  

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input  type = 'text'
                placeholder = 'First Name'
                onChange = {this.handleChange}
                value = {this.state.fName}
                name = 'fName' />
        <input  type = 'text'
                placeholder = 'Middle Name'
                onChange = {this.handleChange}
                value = {this.state.mName}
                name = 'mName' />
        <input  type = 'text'
                placeholder = 'Last Name'
                onChange = {this.handleChange}
                value = {this.state.lName}
                name = 'lName' />
        <input  type = 'number'
                placeholder = 'Age'
                onChange = {this.handleChange}
                value = {this.state.age}
                name = 'age' />
        <button>Submit</button>

      </form>

        <div>
         

          { 
             this.state.people.map(person => 
             <div>
                <h2>First Name: {person.fName}</h2>
                <h2>Middle Name: {person.mName}</h2>
                <h2>Last Name: {person.lName}</h2>
                <h3>Age: {person.age} </h3> 
              </div>
             )  
         } 

        </div>

        
      </div>
    );
  }
}

export default App;
