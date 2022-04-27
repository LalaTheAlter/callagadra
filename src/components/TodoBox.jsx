import React, { useEffect, useState } from 'react'

import SelectedDateLabel from './SelectedDateLabel'
import SelectedDateTodoList from './SelectedDateTodoList'
import TodoForm from './TodoForm'


export default function TodoBox() {

  const [selectedDate, setSelectedDate] = useState(null)
  
  const handleDateSelect = (event) => {
    event.preventDefault()
    setSelectedDate(event.detail)
  }

  useEffect(() => {
    document.addEventListener("newDateSelected", handleDateSelect) // recieved from <= TodoTile.jsx
  
    return () => {
      document.removeEventListener("newDateSelected", handleDateSelect) // recieved from <= TodoTile.jsx
    }
  })

  const [itemSelected, setItemSelected] = useState(null)

  const handleNewTodoItemSelected = (event) => {
    event.preventDefault()
    console.log(event.detail)
    setItemSelected(event.detail)
  }
  
  useEffect(() => {
    document.addEventListener("newTodoItemSelected", handleNewTodoItemSelected) // recieved from <= TodoItem.jsx
  
    return () => {
      document.removeEventListener("newTodoItemSelected", handleNewTodoItemSelected) // recieved from <= TodoItem.jsx
    }
  })
  
  return (
    <div className='todoBox'>
      <SelectedDateLabel selectedDate={selectedDate} /> 
      <SelectedDateTodoList selectedDate={selectedDate} />
      
      {selectedDate && 
        <TodoForm 
          // itemSelected={itemSelected}
          selectedDate={selectedDate}/>}
    </div>
  )
}
