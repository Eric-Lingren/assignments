import React from 'react'

const Todo = (props) => {
const {title, description, price, completed, image, handleDelete, id} = props
    return (
        <div className='todoItem'>
            <h2> {title} </h2>
            <h3> {description} </h3>
            <h4> {price} </h4>
            <h4> {completed} </h4>
            <img src={image} className='picture'></img>
            <button onClick={ () => handleDelete(id) }>Delete</button>
        </div>
    )
}

export default Todo