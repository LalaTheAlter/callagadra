import React, { useEffect, useRef, useState } from 'react'
import saveTodoData from '../funcs/saveTodoData'


export default function TodoForm() {

  let todoStartTime = useRef(null)
  let todoEndTime = useRef(null)
  let todoText = useRef(null)
  const [selectedDate, setSelectedDate] = useState(null)
  
  const handleTodoInput = (event) => { 
    saveTodoData(
      selectedDate, 
      todoStartTime.current.value, 
      todoEndTime.current.value, 
      todoText.current.value)
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
      <h4>Date: {selectedDate ? 
        (selectedDate.split("_").reverse().join(", "))
        : "dd, mm, yyyy"}</h4>
      <form onSubmit={handleTodoInput}>
        <label>
          start: 
          <input 
            ref={todoStartTime}
            name="todoStartTime" 
            type="time"
            required />
        </label>
        <label>
          end: 
          <input 
            ref={todoEndTime}
            name="todoEndTime" 
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
