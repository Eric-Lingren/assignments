import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo'
import TodoForm from './TodoForm'


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
      title: '',
    }
  }

  componentDidMount(){
    axios.get('https://api.vschool.io/ericlingren/todo').then(response => {
      const data = response.data
      this.setState({
        data
      })
    })
  }


  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: this.state.title
    }
    axios.post('https://api.vschool.io/ericlingren/todo', newTodo).then(response => {
      this.setState(prevState => ({
        data: [...prevState.data, response.data],
        title: ''
      }))
    })
  }

  handleDelete = (id) => {
    // console.log(id)
    axios.delete(`https://api.vschool.io/ericlingren/todo/${id}`).then(response => {
      console.log(response)
      this.setState(prevState => {
        return {
          data: prevState.data.filter(item => item._id !== id)
        }
      })
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div >
        <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {
        this.state.data.map(item => 
          <Todo
            title={item.title}
            description={item.description}
            completed={item.completed}
            price={item.price}
            image={item.imgUrl}
            key={item._id}
            handleDelete={this.handleDelete}
            id={item._id}
          />
        ) 
        }
      </div>
    );
  }
}

export default App;
