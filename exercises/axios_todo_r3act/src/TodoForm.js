import React from 'react'

const TodoForm = (props) => {
    const {handleChange, handleSubmit, title} = props
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' value={title} onChange={handleChange} placeholder='Title'/>
            <button>Add ToDo</button>
        </form>
    )
}

export default TodoForm