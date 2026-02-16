import React from 'react'
import './Todo.css'
function Todo(props) {
 const {todo}=props
  return (
    <div className='todo'>
      <p>{todo.currentTitle} <span>{todo.currentPriority}</span></p>
      
      <button>Delete</button>
    </div>
  )
}

export default Todo
