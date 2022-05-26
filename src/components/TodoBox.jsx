import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import ModalOpener from '../hocs/ModalOpener'
import DateLabel from './DateLabel'
import DateTodoList from './DateTodoList'
import TodoInsertMenu from './TodoInsertMenu'
import TodoManageMenu from './TodoManageMenu'
import TodoWriteMenu from './TodoWriteMenu'


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
      <div className='todoBox-dateBubble'>
        <DateLabel selectedDate={selectedDate} /> 
        <DateTodoList selectedDate={selectedDate} />
        <ModalOpener modalClassName="notShadowed" buttonText={"[+]"}>
          <TodoInsertMenu  selectedDate={selectedDate} />
        </ModalOpener>
      </div>

      <div className='todoBox-buttonBubble'>
        <ModalOpener buttonText="Create new event"> 
          <TodoWriteMenu />
        </ModalOpener>
        <ModalOpener buttonText="Manage all events">
          <TodoManageMenu />
        </ModalOpener>
      </div>
    </div>
  )
}
