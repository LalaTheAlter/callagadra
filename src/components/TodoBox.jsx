import React, { useEffect, useState } from 'react'

import SelectedDateLabel from './SelectedDateLabel'
import SelectedDateTodoList from './SelectedDateTodoList'
import TodoForm from './TodoForm'


export default function TodoBox() {

  const [selectedDate, setSelectedDate] = useState(null)
  
  const handleDateSelect = (event) => {
    setSelectedDate(event.detail)
    event.preventDefault()
  }

  useEffect(() => {
    document.addEventListener("newDateSelected", handleDateSelect) // recieved from <= TodoTile.jsx
  
    return () => {
      document.removeEventListener("newDateSelected", handleDateSelect) // recieved from <= TodoTile.jsx
    }
  })
  
  
  return (
    <div className='todoBox'>
      <SelectedDateLabel selectedDate={selectedDate} /> 
      <SelectedDateTodoList selectedDate={selectedDate} />
      {selectedDate && <TodoForm selectedDate={selectedDate}/>}
    </div>
  )
}
