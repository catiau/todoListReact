import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

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
    <form className="todoListForm" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="I will do"
            value={input}
            name="value"
            className="todoList-input-edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todoList-button-edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="I will do"
            value={input}
            name="value"
            className="todoListInput"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todoList-button">Add to list</button>
        </>
      )}
    </form>
  )
}

export default TodoForm
