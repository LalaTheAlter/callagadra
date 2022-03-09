import React, { useEffect, useState } from 'react'

import SelectedDateLabel from './SelectedDateLabel'
import TodoForm from './TodoForm'


export default function TodoBox() {

  const [selectedDate, setSelectedDate] = useState(null)
  
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
    <div className='todoBox'>
      <SelectedDateLabel selectedDate={selectedDate} />    
      <TodoForm selectedDate={selectedDate}/>
    </div>
  )
}
