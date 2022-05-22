import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import ModalOpener from '../hocs/ModalOpener'

import SelectedDateViewer from './SelectedDateViewer'
import TodoForm from './TodoForm'


export default function TodoBox() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'y_M_d'))
  
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
  

 
  return (
    <div className='todoBox'>
      <SelectedDateViewer selectedDate={selectedDate} />

      <ModalOpener buttonText="Manage Events">
        <TodoForm selectedDate={selectedDate}/>
      </ModalOpener>
    </div>
  )
}
