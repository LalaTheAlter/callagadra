import React, { useRef } from 'react'
import saveTodoData from '../hooks, funcs/saveTodoData'


export default function TodoForm() {

  let todoTime = useRef(null)
  let todoText = useRef(null)

  const handleTodoInput = (event) => { 
    saveTodoData(todoTime.current.value, todoText.current.value)
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleTodoInput}>
        <label>
          Pick a time: 
          <input 
            ref={todoTime}
            name="todoTime" 
            type="time"
            required />
        </label>
        <label>
          Describe your event:
          <textarea 
            ref={todoText}
            name="todoText" 
            spellCheck="false"
            minLength={4}
            cols="30" 
            rows="10"
            required />
        </label>
        <button type="submit">Set it</button>
      </form>
    </div>
  )
}
