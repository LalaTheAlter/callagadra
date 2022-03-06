import React, { useEffect, useRef, useState } from 'react'
import saveTodoData from '../funcs/saveTodoData'


export default function TodoForm() {

  let todoTime = useRef(null)
  let todoText = useRef(null)
  const [selectedDate, setSelectedDate] = useState(null)
  
  const handleTodoInput = (event) => { 
    saveTodoData(selectedDate, todoTime.current.value, todoText.current.value)
    event.preventDefault()
  }
  
  const handleDateSelect = (event) => {
    setSelectedDate(event.detail)
    event.preventDefault()
  }

  useEffect(() => {
    document.addEventListener("newDateSelected", handleDateSelect) // recieved from <= CalendarTile.jsx
  
    return () => {
      document.removeEventListener("newDateSelected", handleDateSelect) // recieved from <= CalendarTile.jsx
    }
  })
  

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
            minLength={3}
            cols="30" 
            rows="10"
            required />
        </label>
        <button type="submit">Set it</button>
      </form>
    </div>
  )
}
