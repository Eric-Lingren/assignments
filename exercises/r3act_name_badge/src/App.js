import React, { Component } from 'react';
import Form from './Form'
import Badge from './Badge'

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phone: '',
      favFood: '',
      about: '',
      nameTag: { 
          firstName: '',
          lastName: '',
          email: '',
          birthPlace: '',
          phone: '',
          favFood: '',
          about: ''
        }
    }
  }

  handleChange = (e) => {
     // deconstruct `name` and `value` from e.target
     const {name, value} = e.target
     // Rather than declaring them separately
         // const name = e.target.name
         // const value = e.target.value
     this.setState({
         [name]: value
     })
  }


  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
        name: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newNameTag = {}
    newNameTag.firstName= this.state.firstName; 
    newNameTag.lastName =this.state.lastName; 
    newNameTag.email=  this.state.email;
    newNameTag.birthPlace=  this.state.birthPlace;
    newNameTag.phone = this.state.phone;
    newNameTag.favFood =this.state.favFood;
    newNameTag.about =this.state.about;

    
    if(newNameTag.firstName.length < 4 || newNameTag.lastName.length < 4 || newNameTag.email.length < 4 || newNameTag.birthPlace.length < 4 || newNameTag.phone.length < 4 || newNameTag.favFood.length < 4 || newNameTag.about.lenght < 4){
      alert('You need to enter more than 3 characters')
    } else {
    this.setState({
      nameTag: newNameTag,
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phone: '',
      favFood: '',
      about: '',
    })
    }
  }

  render() {
    return (
      <div className='wrapper'>
        
        <Form 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          birthPlace={this.state.birthPlace}
          phone={this.state.phone}
          favFood={this.state.favFood}
          about={this.state.about}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Badge 
        firstName={this.state.nameTag.firstName}
        lastName={this.state.nameTag.lastName}
          email={this.state.nameTag.email}
          birthPlace={this.state.nameTag.birthPlace}
          phone={this.state.nameTag.phone}
          favFood={this.state.nameTag.favFood}
          about={this.state.nameTag.about}
          handleChange={this.state.nameTag.handleChange}
        />
      </div>
    );
  }
}

export default App;
