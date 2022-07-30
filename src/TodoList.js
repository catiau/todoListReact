import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if(!todo.text || /^\$*$/.test(todo.text)){
      return
    }

  const newTodos = [todo, ...todos]

  setTodos(newTodos)
  console.log(...todos)
  }

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updateTodos)
  }

  return (
      <>
         <h1>What's the Plan for Today?</h1>
         <TodoForm onSubmit={addTodo}/>
         <Todo 
         todos={todos}
         completeTodo={completeTodo}/>
      </>
    )
}

export default TodoList