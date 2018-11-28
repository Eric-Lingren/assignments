import React, {Component, Fragment} from 'react'

class Todo extends Component {

    constructor(){
        super()
        this.state = {
            isEditing: false,
            title: ''
        }
    }

    editToggler = () => {
        this.setState(prevState => {
            return {
                isEditing: !prevState.isEditing
            }
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const updates = {
            title: this.state.title
        }
        this.props.handleEdit(this.props.id, updates)
        this.setState({
            title: ''
        })
        this.editToggler();
    }


    render() {
        return (
            <Fragment>
            { this.state.isEditing ? 
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text' 
                            value={this.state.title} 
                            onChange={this.handleChange} 
                            name='title' 
                            placeholder={this.props.title} />
                        <button> Submit Edit </button>
                    </form>
                    <button onClick={this.editToggler}> Close</button>
                </div>
                
            :
            <div className='todoItem'>
                <h2> {this.props.title} </h2>
                <h3> {this.props.description} </h3>
                <h4> {this.props.price} </h4>
                <h4> {this.props.completed} </h4>
                <img src={this.props.image} className='picture'></img>
                <button onClick={ () => this.props.handleDelete(this.props.id) }>Delete</button>
                <button onClick={this.editToggler} >Edit</button>
            </div>
            }
            </Fragment>
        )
    }
}

export default Todo