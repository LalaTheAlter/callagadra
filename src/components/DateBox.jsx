import './DateBox.scss'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import ModalOpener from '../hocs/ModalOpener'
import DateLabel from './DateLabel'
import DateTodoList from './DateTodoList'
import TodoInsertMenu from './TodoInsertMenu'



export default function DateBox() {
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
    <div className='date-box'>
      <DateLabel className="date-box__todo-label" selectedDate={selectedDate} /> 
      <DateTodoList className="date-box__todo-list" selectedDate={selectedDate} />
      <ModalOpener 
        buttonClassName="date-box__insert-btn" 
        modalModifierClassName="modal--not-shadowed" 
        buttonText={"[+]"}>
        <TodoInsertMenu selectedDate={selectedDate} />
      </ModalOpener>
    </div>
  )
}
