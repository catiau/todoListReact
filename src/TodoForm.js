import React, { useState } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('')
  
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()


    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    })
    
    setInput('')
  }
 

  return (
    <form className='todoListForm' onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='I will do' 
        value={input}
        name='value'
        className='todoListInput'
        onChange={handleChange}
        />
        <button className='todoList-button'>Add to list</button>
    </form>
  )
}

export default TodoForm